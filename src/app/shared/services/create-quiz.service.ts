import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Round } from '../models/round.model';
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

    rounds: Round[] = [];
    roundsReferenceArray: Subject<Round[]> = new Subject<Round[]>();

    //Manage Quiz methods
    addQuiz(quiz: Quiz) {
        this.dataService.saveQuiz(quiz)
        .subscribe(response => {
            this.quiz = response;
            if(this.quiz) {
                this.httpErrorState.next(false);
                this.validHttpResponse.next(true);
            }
        },
        (error) => {
            this.httpErrorState.next(true);
        });
    }

    //Manage Round methods
    addRound(round: Round) {
        this.dataService.saveRound(round)
        .subscribe(response => {
            this.rounds.push(response);
            this.roundsReferenceArray.next(this.rounds.slice());
            if(response) {
                this.httpErrorState.next(false);
                this.validHttpResponse.next(true);
                console.log(this.rounds);
            }
        },
        (error) => {
            this.httpErrorState.next(true);
        })
    }

    

}