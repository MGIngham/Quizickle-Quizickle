import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-question-builder-container',
  templateUrl: './question-builder-container.component.html',
  styleUrls: ['./question-builder-container.component.css']
})
export class QuestionBuilderContainerComponent implements OnInit {

  subRoundNum: Subscription;
  subShowQuestionQuestionBuilder: Subscription;

  roundNum: number;
  showQuestionBuilder: boolean = false;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.subRoundNum = this.createQuizService.roundNumber
    .subscribe(num => {
      this.roundNum = num;
    })

    this.subShowQuestionQuestionBuilder = this.createQuizService.showQuestionBuilder
    .subscribe(show => {
      this.showQuestionBuilder = show;
      console.log(this.showQuestionBuilder);
    })
  }

}
