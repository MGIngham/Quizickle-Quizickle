import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Question } from 'src/app/shared/models/question.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-question-builder-container',
  templateUrl: './question-builder-container.component.html',
  styleUrls: ['./question-builder-container.component.css']
})
export class QuestionBuilderContainerComponent implements OnInit, OnDestroy {

  //Service subject subscriptions.
  subRoundNum: Subscription;
  subValidHttpResponse: Subscription;
  subQuestionIsInEditMode: Observable<boolean>;

  //class properties
  roundNum: number;
  showQuestionTypes: boolean = true;
  questionType: number;
  questionForm: FormGroup;
  question: Question;


  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {

    
    this.subRoundNum = this.createQuizService.roundNumber
    .subscribe(num => {
      this.roundNum = num;
    })

    this.subValidHttpResponse = this.createQuizService.validHttpResponse
    .subscribe(isValid => {
      if(isValid == true) {
        this.questionForm.reset();
      }
    })

    this.subQuestionIsInEditMode = this.createQuizService.questionInEditMode.asObservable();
  
    this.questionForm = new FormGroup({
      "questionText": new FormControl(null, Validators.required),
      "answerText": new FormControl(null),
      "isTrueFalse": new FormControl(null),
      "optionOne": new FormControl(null),
      "optionTwo": new FormControl(null),
      "optionThree": new FormControl(null)
    })
  }

  toggleQuestionTemplate(questionType: number, showType: boolean) {
    this.showQuestionTypes = showType;
    this.questionType = questionType;
  }

  cancelQuestion(areVisible: boolean) {
    let confirmCancel = confirm("Hola, just to say, if you cancel this question then it won't be saved.")
    
    if(confirmCancel == true) {
      this.createQuizService.questionBuilderIsInEditMode(areVisible);
    }
  }

  saveQuestion() {

    this.question = new Question(
      this.createQuizService.quiz.id,
      this.roundNum,
      this.questionType,
      this.questionForm.get("questionText").value,
      this.questionForm.get("answerText").value,
      this.questionForm.get("isTrueFalse").value,
      this.questionForm.get("optionOne").value,
      this.questionForm.get("optionTwo").value,
      this.questionForm.get("optionThree").value
    )

    this.createQuizService.addQuestion(this.question);

    this.showQuestionTypes = true;
    this.createQuizService.questionBuilderIsInEditMode(false);

  }

  ngOnDestroy() {
    this.subRoundNum.unsubscribe();
    this.subRoundNum.unsubscribe();
  }

}
