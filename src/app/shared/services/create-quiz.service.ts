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
    errorText: Subject<string> = new Subject<string>();
    //Wait... don't proceed unti HTTP response has been received and this becomes true. 
    validHttpResponse: Subject<boolean> = new Subject<boolean>();
    //This hold the quiz object that all rounds and questions will be associated with. 
    quiz: Quiz;

    rounds: Round[] = [];
    roundsReferenceArray: Subject<Round[]> = new Subject<Round[]>();

    //These properties pass data from the rounds builder into the question builder. 
    roundNumber: Subject<number> = new Subject<number>();

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
            this.errorText.next("Oh no something went wrong :( Please try and create your quiz again!");
        });
    }

    //Manage Round methods
    addRound(round: Round) {
        /*this.dataService.saveRound(round)
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
            this.errorText.next("Oh no something went wrong!");
        })*/
        this.rounds.push(round);
        this.roundsReferenceArray.next(this.rounds.slice());
    }

    updateRound(round: Round, id: number) {
        this.dataService.updateRound(round, id)
        .subscribe(response => {
            console.log(response);
        })
    }

    initiateQuestionBuilder(roundNum: number) {
        this.roundNumber.next(roundNum);
    }

    

}