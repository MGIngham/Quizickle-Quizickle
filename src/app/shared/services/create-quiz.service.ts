import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { CentralDataProvider } from './central-data-provider.service';

@Injectable({providedIn: 'root'})
export class CreateQuizService {

    constructor(private dataService: CentralDataProvider){}

    //Oh no HTTP returned an error, display error text in compontent. 
    httpErrorState: Subject<boolean> = new Subject<boolean>();
    //Wait... don't proceed unti HTTP response has been received and this becomes true. 
    validHttpResponse: Subject<boolean> = new Subject<boolean>();
    //This hold the quiz object that all rounds and questions will be associated with. 
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