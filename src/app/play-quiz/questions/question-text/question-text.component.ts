import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css']
})
export class QuestionTextComponent implements OnInit {

  @Input() question: Question;
  
  constructor() { }

  ngOnInit(): void {
  }

}
