import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-text-form',
  templateUrl: './question-text-form.component.html',
  styleUrls: ['./question-text-form.component.css']
})
export class QuestionTextFormComponent implements OnInit {

  @Input() roundNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

}
