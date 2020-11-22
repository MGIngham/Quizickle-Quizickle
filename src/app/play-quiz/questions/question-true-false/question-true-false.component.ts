import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-question-true-false',
  templateUrl: './question-true-false.component.html',
  styleUrls: ['./question-true-false.component.css']
})
export class QuestionTrueFalseComponent implements OnInit {

  @Input() question: Question;
  
  constructor() { }

  ngOnInit(): void {
  }

}
