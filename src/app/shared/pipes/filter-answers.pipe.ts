import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from '../models/answer.model';

@Pipe({name: 'filterAnswers'})
export class FilterAnswersPipe implements PipeTransform {
    transform(answers: Answer[], roundNumber: number) : Answer[] {
        return answers.filter(answer => answer.roundNumber === roundNumber);
    }
}