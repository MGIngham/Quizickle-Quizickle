import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  quiz: Quiz;
  quizName: string = "";
  displayRoundInfo: string =  "";
  rounds: Round[] = [];
  round: Round;
  questions: Question[];
  question: Question;

  questionsLength: number;
  questionIndex: number = 0;
  questionType: number = 0;

  constructor(private route: ActivatedRoute, private playQuizService: PlayQuizService) { }

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
  
      this.getNextQuestion();
    })

    this.questions = this.route.snapshot.data[0];
    this.questionsLength = this.questions.length;


  }

  getNextQuestion() {
    console.log(this.questionIndex);
    console.log(this.questionsLength);
    if(this.questionIndex < this.questionsLength) {
      this.question = this.questions[this.questionIndex];
      this.questionType = this.question.questionType;
      this.displayRound();
      this.questionIndex ++;
    } else {
      this.playQuizService.calculateScore();
    }
  }

  displayRound() {
    this.round = this.rounds.find(r => 
      r.roundNumber === this.question.roundNumber
    );
    this.displayRoundInfo = "Round: " + this.round.roundNumber + " "  + this.round.roundName;
  }

  ngOnDestroy() {
    this.quizSubscription.unsubscribe();
    this.roundsSubscription.unsubscribe();
  }

}
