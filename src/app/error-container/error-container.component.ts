import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateQuizService } from '../shared/services/create-quiz.service';

@Component({
  selector: 'app-error-container',
  templateUrl: './error-container.component.html',
  styleUrls: ['./error-container.component.css']
})
export class ErrorContainerComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  errorText: string;

  constructor(private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.subscription = this.createQuizService.errorText
    .subscribe(errorText => {
      this.errorText = errorText;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
