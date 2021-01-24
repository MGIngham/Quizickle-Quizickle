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
  questionIndexReference: Subscription;
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
  questionIndex: number = 1;
  questionType: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private playQuizService: PlayQuizService) { }

  ngOnInit(): void {

    const quizId = +this.route.snapshot.paramMap.get('id');

    this.playQuizService.getQuiz(quizId);

    this.quizSubscription = this.playQuizService.quiz
    .subscribe(quiz => {
      this.quiz = quiz;
      this.quizName = this.quiz.quizName;
    })

    this.questionIndexReference = this.playQuizService.questionIndexReference
    .subscribe(index => {
      this.questionIndex = index;
      this.getNextQuestion();
    })

    this.questions = this.route.snapshot.data["questions"];
    this.rounds = this.route.snapshot.data["rounds"];

    this.questionsLength = this.questions.length;
    this.question = this.questions[0];
    this.questionType = this.question.questionType;
    this.round = this.rounds[0];
    this.displayRound();
    this.playQuizService.rounds = this.rounds;

  }

  getNextQuestion() {
    let questionIndex = this.questionIndex;
    if(questionIndex < this.questionsLength -1) {
      this.question = this.questions[questionIndex];
      this.questionType = this.question.questionType;
      this.displayRound();
    } else {
      this.playQuizService.calculateScore();
      this.router.navigate(["/answers/quiz/", this.quiz.id])
    }

    console.log(this.questionIndex + " " + this. questionsLength)
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
  }

}
