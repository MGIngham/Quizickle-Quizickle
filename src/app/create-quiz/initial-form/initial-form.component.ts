import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {

  newQuizForm: FormGroup;

  constructor(private creatQuizService: CreateQuizService) { }

  ngOnInit(): void {

    this.newQuizForm = new FormGroup({
      'quizName': new FormControl(null, Validators.required),
      'backgroundColour': new FormControl("#fff")
    })

  }

  onAddQuiz() {
    this.creatQuizService.addQuiz(this.newQuizForm.value);
  }

}
