import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({providedIn: 'root'})
export class CreateQuizService {

    addQuiz(quiz: Quiz) {
        console.log(quiz);
    }

}