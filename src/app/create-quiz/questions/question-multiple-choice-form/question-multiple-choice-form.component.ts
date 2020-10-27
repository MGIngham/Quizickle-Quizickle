import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-multiple-choice-form',
  templateUrl: './question-multiple-choice-form.component.html',
  styleUrls: ['./question-multiple-choice-form.component.css']
})
export class QuestionMultipleChoiceFormComponent implements OnInit {

  @Input() roundNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

}
