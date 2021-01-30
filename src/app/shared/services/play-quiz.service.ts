import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';
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
    rounds = [];

    score: number = 0;
    answers: Answer[] = [];
    questionsLength: number;
    quizIsOver: Subject<boolean> = new Subject<boolean>();
    qType: number;

    questionIndex: number = 0;
    questionIndexReference: Subject<number> = new Subject<number>();
    quizThemeColour: Subject<string> = new Subject<string>();

    addPropertyToRounds(rounds: Round[]) {
        this.rounds = rounds.map(round => ({...round, roundScore: 0}));
    }

    evaluateTextAnswer(answer: string, correctAnswer: string, question: Question) {

        let fullAnswer: Answer;
        let answerIsCorrect: boolean;

        if(answer.toUpperCase() === correctAnswer.toUpperCase()) {
            this.score ++;
            this.rounds[question.roundNumber -1].roundScore += 1;
            answerIsCorrect = true;
        } else {
            this.score = this.score;
            answerIsCorrect = false;
        }

        if(this.questionsLength != this.questionIndex + 1) {
            this.questionIndex ++;
            this.questionIndexReference.next(this.questionIndex);
        } else {
            this.quizIsOver.next(true);
        }

        fullAnswer = new Answer(
            question.roundNumber,
            question.questionText,
            correctAnswer,
            answer,
            answerIsCorrect 
        )

        this.answers.push(fullAnswer);
    }

    getQuizColour(hexCode: string) {
        this.quizThemeColour.next(hexCode);
    }
}