import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { CentralDataProvider } from './central-data-provider.service';

@Injectable({providedIn: 'root'})
export class CreateQuizService {

    constructor(private dataService: CentralDataProvider){}

    addQuiz(quiz: Quiz) {
        this.dataService.saveQuiz(quiz);
    }

}