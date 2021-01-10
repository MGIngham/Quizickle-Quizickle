import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { Question } from 'src/app/shared/models/question.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { Round } from 'src/app/shared/models/round.model';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-play-quiz-container',
  templateUrl: './play-quiz-container.component.html',
  styleUrls: ['./play-quiz-container.component.css']
})
export class PlayQuizContainerComponent implements OnInit, OnDestroy {

  quizSubscription: Subscription;
  roundsSubscription: Subscription;
  toggleQuestionSubscription: Subscription;
  quizIsOver: Subscription;
  quiz: Quiz;
  quizName: string = "";
  displayRoundInfo: string =  "";
  rounds: Round[] = [];
  round: Round;
  newRound: boolean; 
  questions: Question[];
  question: Question;

  questionsLength: number;
  questionIndex: number = 0;
  questionType: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private playQuizService: PlayQuizService) { }

  ngOnInit(): void {

    const quizId = +this.route.snapshot.paramMap.get('id');

    this.playQuizService.getQuiz(quizId);
    this.playQuizService.getRounds(quizId);

    this.quizSubscription = this.playQuizService.quiz
    .subscribe(quiz => {
      this.quiz = quiz;
      this.quizName = this.quiz.quizName;
    })

    this.roundsSubscription = this.playQuizService.rounds
    .subscribe(rounds => {
      this.rounds = rounds;
  
      this.round = this.rounds[0];
      this.getNextQuestion();
    })

    this.toggleQuestionSubscription = this.playQuizService.toggleNextQuestion
    .subscribe(val => {
      if(val == true) {
        this.getNextQuestion();
      }
    })

    this.quizIsOver = this.playQuizService.quizIsOver
    .subscribe(isOver => {
      if(isOver) {
        this.router.navigate(["/answers/quiz/", this.quiz.id])
      }
    })

    this.questions = this.route.snapshot.data[0];
    this.questionsLength = this.questions.length;

  }

  getNextQuestion() {
    if(this.questionIndex < this.questionsLength) {
      this.question = this.questions[this.questionIndex];
      this.questionType = this.question.questionType;
      this.displayRound();
      this.questionIndex ++;
    } else {
      this.playQuizService.calculateScore();
    }
    this.playQuizService.nextQuestionValue = false;
  }

  displayRound() {
    let previousRound = this.round.roundNumber;

    this.round = this.rounds.find(r => 
      r.roundNumber === this.question.roundNumber
    );

    if(previousRound != this.round.roundNumber) {

      this.newRound = true;

      setTimeout(() => {
        this.newRound = false;
      }, 3000);

    }

    this.displayRoundInfo = "Round: " + this.round.roundNumber + " "  + this.round.roundName;
  }

  ngOnDestroy() {
    this.quizSubscription.unsubscribe();
    this.roundsSubscription.unsubscribe();
    this.toggleQuestionSubscription.unsubscribe();
  }

}
