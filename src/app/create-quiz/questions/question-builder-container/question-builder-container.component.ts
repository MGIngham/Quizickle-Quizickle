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
  roundNum: number;
  showQuestionTypes: boolean = true;
  questionType: number;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.subRoundNum = this.createQuizService.roundNumber
    .subscribe(num => {
      this.roundNum = num;
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

  ngOnDestroy() {
    this.subRoundNum.unsubscribe();
  }

}
