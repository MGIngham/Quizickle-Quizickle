import { ConstantPool } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/shared/models/question.model';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { Round } from 'src/app/shared/models/round.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-play-quiz-container',
  templateUrl: './play-quiz-container.component.html',
  styleUrls: ['./play-quiz-container.component.css']
})
export class PlayQuizContainerComponent implements OnInit, OnDestroy {

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

  questionIndex: number = 1;
  questionType: number = 0;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private createQuizService: CreateQuizService,
    private playQuizService: PlayQuizService
  ) { }

  ngOnInit(): void {

    const quizId = +this.route.snapshot.paramMap.get('id');

    this.questionIndexReference = this.playQuizService.questionIndexReference
    .subscribe(index => {
      this.questionType = 0;
      this.questionIndex = index;
          
      setTimeout(() => {
        this.getNextQuestion();
      }, 200)
    })

    this.quizIsOver = this.playQuizService.quizIsOver
    .subscribe(isOver => {
      if(isOver === true) {
        this.router.navigate(["/answers/quiz/", this.quiz.id])
      }
    })

    this.quiz = this.route.snapshot.data["quiz"];
    this.quizName = this.quiz.quizName;
    this.questions = this.route.snapshot.data["questions"];
    this.rounds = this.route.snapshot.data["rounds"];

    this.createQuizService.getQuizColour(this.quiz.backgroundColour);

    this.question = this.questions[0];
    this.questionType = this.question.questionType;
    this.round = this.rounds[0];
    this.displayRound();
    //this.playQuizService.rounds = this.rounds;
    this.playQuizService.addPropertyToRounds(this.rounds);
    this.playQuizService.questionsLength = this.questions.length;

    console.log(this.questions);

  }

  getNextQuestion() {
    this.question = this.questions[this.questionIndex];
    this.questionType = this.question.questionType;
    this.displayRound();
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
    this.questionIndexReference.unsubscribe();
  }

}
