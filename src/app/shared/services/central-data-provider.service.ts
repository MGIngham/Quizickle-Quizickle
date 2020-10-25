import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Round } from '../models/round.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    getQuizById(id: number){
        this.http.get(this.baseUri + "quizs" + id)
        .pipe(
            catchError(this.handleError)
        )
        .subscribe(response => {
            console.log(response);
        })
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

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}