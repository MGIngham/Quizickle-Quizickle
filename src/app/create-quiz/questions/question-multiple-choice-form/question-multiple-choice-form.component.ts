import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-multiple-choice-form',
  templateUrl: './question-multiple-choice-form.component.html',
  styleUrls: ['./question-multiple-choice-form.component.css']
})
export class QuestionMultipleChoiceFormComponent implements OnInit {

  @Input() questionForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
