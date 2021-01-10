import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from '../models/answer.model';

@Pipe({name: 'filterAnswers'})
export class FilterAnswersPipe implements PipeTransform {
    transform(questions: Answer[], roundNumber: number) : Answer[] {
        return questions.filter(question => question.roundNumber === roundNumber);
    }
}