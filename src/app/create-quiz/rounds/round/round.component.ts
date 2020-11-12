import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Question } from 'src/app/shared/models/question.model';
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
  questions: Question[] = [];

  updateRoundName: FormGroup;
  roundDisplayName: string;
  editRoundName: boolean = true;
  addButtonEnabled: Observable<boolean>;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.updateRoundName = new FormGroup({
      "roundName": new FormControl("")
    });

    this.addButtonEnabled = this.createQuizService.questionInEditMode.asObservable();

    this.subscription = this.createQuizService.questionsReferenceArray
    .subscribe(questions => {
        this.questions = questions;
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

  }

}
