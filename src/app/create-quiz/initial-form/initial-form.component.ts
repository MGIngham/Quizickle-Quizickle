import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit, OnDestroy {

  httpErrorState: Subscription;
  isValidResponse: Subscription;
  isHttpError: boolean;
  newQuizForm: FormGroup;

  constructor(private creatQuizService: CreateQuizService, 
              private router: Router) { }

  ngOnInit(): void {

    this.httpErrorState = this.creatQuizService.httpErrorState
    .subscribe(isError => {
      this.isHttpError = isError;
    })

    this.isValidResponse = this.creatQuizService.validHttpResponse
    .subscribe(valid => {
      if(valid) {
        this.router.navigate(['/quiz-builder/', this.creatQuizService.quiz.id])
      }
    })

    this.newQuizForm = new FormGroup({
      'quizName': new FormControl(null, Validators.required),
      'backgroundColour': new FormControl("#fff")
    })

  }

  onAddQuiz() {
    this.creatQuizService.addQuiz(this.newQuizForm.value);
  }

  ngOnDestroy(){
    this.isValidResponse.unsubscribe();
    this.httpErrorState.unsubscribe();
  }

}
