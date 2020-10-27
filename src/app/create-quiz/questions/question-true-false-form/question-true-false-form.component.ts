import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-true-false-form',
  templateUrl: './question-true-false-form.component.html',
  styleUrls: ['./question-true-false-form.component.css']
})
export class QuestionTrueFalseFormComponent implements OnInit {

  @Input() roundNumber: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
