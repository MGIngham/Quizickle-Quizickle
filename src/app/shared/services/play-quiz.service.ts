import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Round } from '../models/round.model';
import { CentralDataProvider } from './central-data-provider.service';

@Injectable({providedIn: 'root'})
export class PlayQuizService {

    constructor(private dataService: CentralDataProvider){}

    //Oh no HTTP returned an error, display error text in compontent. 
    httpErrorState: Subject<boolean> = new Subject<boolean>();
    errorText: Subject<string> = new Subject<string>();
    //Wait... don't proceed unti HTTP response has been received and this becomes true. 
    validHttpResponse: Subject<boolean> = new Subject<boolean>();
    
    //This hold the quiz object that all rounds and questions will be associated with. 
    quiz: Subject<Quiz> = new Subject<Quiz>();
    rounds: Subject<Round[]> = new Subject<Round[]>();

    score: number = 0;
    toggleNextQuestion: Subject<boolean> = new Subject<boolean>();
    nextQuestionValue: boolean = false;

    getQuiz (id: number) {
        this.dataService.getQuizById(id)
        .subscribe(response => {
            this.quiz.next(response);
        })
    }    

    getRounds(id: number) {
        this.dataService.getRoundsByQuizId(id)
        .subscribe(response => {
            this.rounds.next(response);
        })
    }

    evaluateTextAnswer(answer: string, correctAnswer: string) {
        if(answer.toUpperCase() === correctAnswer.toUpperCase()) {
            this.score ++;
        } else {
            this.score = this.score;
        }
        console.log(this.score);
        this.nextQuestionValue = true;
        this.toggleNextQuestion.next(this.nextQuestionValue);
    }

    calculateScore() {
        console.log("THE QUIZ IS OVER");
    }
}