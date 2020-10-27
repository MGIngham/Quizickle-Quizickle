import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Round } from 'src/app/shared/models/round.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  @Input() round: Round;

  updateRoundName: FormGroup;
  roundDisplayName: string;
  editRoundName: boolean = true;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.updateRoundName = new FormGroup({
      "roundName": new FormControl("")
    });
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
  }

}
