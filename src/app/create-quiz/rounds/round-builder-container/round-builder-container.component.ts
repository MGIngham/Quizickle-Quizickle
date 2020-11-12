import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Round } from 'src/app/shared/models/round.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-round-builder-container',
  templateUrl: './round-builder-container.component.html',
  styleUrls: ['./round-builder-container.component.css']
})
export class RoundBuilderContainerComponent implements OnInit, OnDestroy {

  httpError: Subscription;
  roundsSubject: Subscription;
  httpErrorState: boolean;

  rounds: Round[] = [];
  roundNumber = 0;
  round: Round;
  quizId: number;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {

    //quizId set at 30 for testing!!!
    this.quizId = this.createQuizService.quiz.id;
    //this.quizId = 31;

    this.roundsSubject = this.createQuizService.roundsReferenceArray
    .subscribe(rounds => {
      this.rounds = rounds;
    })

    this.createQuizService.addRound(this.createRound());
  }

  addRound(){
    this.createQuizService.addRound(this.createRound());
  }

  ngOnDestroy(){
    this.roundsSubject.unsubscribe();
  }

  createRound() : Round {
    this.roundNumber += 1;
    return new Round(this.quizId, this.roundNumber, '');
  }

}
