import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { CentralDataProvider } from './central-data-provider.service';

@Injectable({providedIn: 'root'})
export class CreateQuizService {

    constructor(private dataService: CentralDataProvider){}

    httpErrorState: Subject<boolean> = new Subject<boolean>();
    validHttpResponse: Subject<boolean> = new Subject<boolean>();
    quiz: Quiz;

    addQuiz(quiz: Quiz) {
        this.dataService.saveQuiz(quiz)
        .subscribe(response => {
            this.quiz = response;
            if(this.quiz) {
                this.httpErrorState.next(false);
                this.validHttpResponse.next(true);
                console.log(this.quiz);
            }
        },
        (error) => {
            this.httpErrorState.next(true);
        });
    }

    

}