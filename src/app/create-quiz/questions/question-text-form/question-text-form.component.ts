import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/shared/models/question.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-question-text-form',
  templateUrl: './question-text-form.component.html',
  styleUrls: ['./question-text-form.component.css']
})
export class QuestionTextFormComponent implements OnInit {

  @Input() questionForm: FormGroup;
  
  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {

  }

}
