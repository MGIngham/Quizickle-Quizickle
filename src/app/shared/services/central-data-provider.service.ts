import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { CreateQuizService } from './create-quiz.service';

@Injectable({providedIn: 'root'})
export class CentralDataProvider {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
    };

    constructor(private http: HttpClient) {}

    getQuizById(id: number){
        this.http.get("http://localhost:55711/api/quizs" + id)
        .subscribe(response => {
            console.log(response);
        })
    }

    saveQuiz(quiz: Quiz) {
        return this.http.post<Quiz>("http://localhost:55711/api/quizs", quiz, this.httpOptions);
    }
}