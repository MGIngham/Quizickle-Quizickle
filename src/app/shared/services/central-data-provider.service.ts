import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Round } from '../models/round.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({providedIn: 'root'})
export class CentralDataProvider {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
    };

    baseUri: string = "http://localhost:55711/api/";

    constructor(private http: HttpClient) {}

    //HTTP methods for Quizzes
    getQuizById(id: number) {
        return this.http.get<Quiz>(this.baseUri + "quizs/" + id)
        .pipe(
            catchError(this.handleError)
        )
    }

    getQuizes() {
        return this.http.get<Quiz[]>(this.baseUri + "quizs/")
        .pipe(
            catchError(this.handleError)
        )
    }

    getRoundsByQuizId(id: string) {
        return this.http.get<Round[]>(this.baseUri + "rounds/quiz/" + id)
        .pipe(
            catchError(this.handleError)
        )
    }

    saveQuiz(quiz: Quiz) {
        return this.http.post<Quiz>(this.baseUri + "quizs", quiz, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }

    //HTTP methods for rounds. 
    saveRound(round: Round) {
        return this.http.post<Round>(this.baseUri + "rounds", round, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }

    updateRound(round: Round, id: number) {
        console.log(round);
        return this.http.put(this.baseUri + "rounds/" + id, round, this.httpOptions);
    }

    //HTTP methods for questions
    saveQuestion(question: Question) {
        return this.http.post<Question>(this.baseUri + "questions", question, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }
    
    getQuestionsByQuizId(quizId: string) {
        return this.http.get<Question[]>(this.baseUri + "questions/quiz/" + quizId)
    }



    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }


}