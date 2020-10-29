import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { Round } from 'src/app/shared/models/round.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit, OnDestroy {

  @Input() round: Round;

  subscription: Subscription;

  updateRoundName: FormGroup;
  roundDisplayName: string;
  editRoundName: boolean = true;
  addButtonEnabled: boolean = false;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.updateRoundName = new FormGroup({
      "roundName": new FormControl("")
    });

    this.subscription = this.createQuizService.questionInEditMode
    .subscribe(isEditMode => {
      this.addButtonEnabled = isEditMode;
    })
  }

  updateName() {
    this.round.roundName = this.updateRoundName.get("roundName").value;;
    this.createQuizService.updateRound(this.round, this.round.id);
    this.roundDisplayName = this.round.roundName;
    this.editRoundName = false;
  }

  toggleEditRoundName() {
    this.editRoundName = true;
  }

  newQuestion(roundNum: number) {
    this.createQuizService.initiateQuestionBuilder(roundNum);
    this.createQuizService.questionBuilderIsInEditMode(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
