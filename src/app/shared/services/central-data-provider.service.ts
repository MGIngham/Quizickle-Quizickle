import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({providedIn: 'root'})
export class CentralDataProvider {

    constructor(private http: HttpClient) {}

    saveQuiz(quiz: Quiz) {
        this.http.post<Quiz>("http://localhost:55711/api/quizs", quiz)
        .subscribe(response => {
            console.log(response)
        },
        error => {
            console.log("An eorror occurred:", error)
        })
    }
}