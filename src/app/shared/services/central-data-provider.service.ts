import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Round } from '../models/round.model';

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
        .subscribe(response => {
            console.log(response);
        })
    }

    saveQuiz(quiz: Quiz) {
        return this.http.post<Quiz>(this.baseUri + "quizs", quiz, this.httpOptions);
    }

    //HTTP methods for rounds. 
    saveRound(round: Round) {
        return this.http.post<Round>(this.baseUri + "rounds", round, this.httpOptions);
    }
}