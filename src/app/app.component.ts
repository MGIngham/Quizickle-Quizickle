import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateQuizService } from './shared/services/create-quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Quizickle';

  subscription: Subscription;
  errorState: boolean;

  constructor(private createQuizService: CreateQuizService) {}

  ngOnInit() {
    this.subscription = this.createQuizService.httpErrorState
    .subscribe(errorState => {
      this.errorState = errorState;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
