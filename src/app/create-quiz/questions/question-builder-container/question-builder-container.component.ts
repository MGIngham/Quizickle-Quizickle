import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-question-builder-container',
  templateUrl: './question-builder-container.component.html',
  styleUrls: ['./question-builder-container.component.css']
})
export class QuestionBuilderContainerComponent implements OnInit, OnDestroy {

  subRoundNum: Subscription;
  subQuestionIsInEditMode: Subscription
  roundNum: number;
  showQuestionTypes: boolean = true;
  questionType: number;
  childComponentsAreVisible: boolean = false;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.subRoundNum = this.createQuizService.roundNumber
    .subscribe(num => {
      this.roundNum = num;
    })

    this.subQuestionIsInEditMode = this.createQuizService.questionInEditMode
    .subscribe(isEditMode => {
      this.childComponentsAreVisible = isEditMode;
    })
  }

  loadQuestionTemplate(questionType: number) {
    this.showQuestionTypes = false;
    this.questionType = questionType;
  }

  backToTypes() {
    this.showQuestionTypes = true;
    this.questionType = 0;
  }

  cancelQuestion(areVisible: boolean) {
    let confirmCancel = confirm("Hola, just to say, if you cancel this question then it won't be saved.")
    
    if(confirmCancel == true) {
      this.createQuizService.questionBuilderIsInEditMode(areVisible);
    }
  }

  ngOnDestroy() {
    this.subRoundNum.unsubscribe();
    this.subQuestionIsInEditMode.unsubscribe();
  }

}
