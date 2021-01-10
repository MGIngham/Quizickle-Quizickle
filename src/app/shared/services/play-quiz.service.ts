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
    quiz: Subject<Quiz> = new Subject<Quiz>();
    rounds: Subject<Round[]> = new Subject<Round[]>();

    score: number = 0;
    toggleNextQuestion: Subject<boolean> = new Subject<boolean>();
    nextQuestionValue: boolean = false;
    answers: Answer[] = [];
    quizIsOver: Subject<boolean> = new Subject<boolean>();

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

    evaluateTextAnswer(answer: string, correctAnswer: string, question: Question) {

        let fullAnswer: Answer;
        let answerIsCorrect: boolean;

        if(answer.toUpperCase() === correctAnswer.toUpperCase()) {
            this.score ++;
            answerIsCorrect = true;
        } else {
            this.score = this.score;
            answerIsCorrect = false;
        }
        this.nextQuestionValue = true;
        this.toggleNextQuestion.next(this.nextQuestionValue);

        fullAnswer = new Answer(
            question.roundNumber,
            question.questionText,
            correctAnswer,
            answer,
            answerIsCorrect 
        )

        this.answers.push(fullAnswer);
    }

    calculateScore() {
        this.quizIsOver.next(true);
        console.log("THE QUIZ IS OVER");
    }
}