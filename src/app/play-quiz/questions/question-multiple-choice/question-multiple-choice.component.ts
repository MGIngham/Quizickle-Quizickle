import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-question-multiple-choice',
  templateUrl: './question-multiple-choice.component.html',
  styleUrls: ['./question-multiple-choice.component.css']
})
export class QuestionMultipleChoiceComponent implements OnInit {

  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
