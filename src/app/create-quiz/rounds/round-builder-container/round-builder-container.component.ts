import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Round } from 'src/app/shared/models/round.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-round-builder-container',
  templateUrl: './round-builder-container.component.html',
  styleUrls: ['./round-builder-container.component.css']
})
export class RoundBuilderContainerComponent implements OnInit {

  rounds: Subscription;
  constructor(private createQuizService: CreateQuizService) { }

  quizId: number;

  ngOnInit(): void {
    this.quizId = this.createQuizService.quiz.id;

    let initialRound: Round = new Round(this.quizId, 1, '');

    this.createQuizService.addRound(initialRound);
  }

  

}
