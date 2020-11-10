import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../models/question.model';

@Pipe({name: 'filterQuestions'})
export class FilterQuestionsPipe implements PipeTransform {
    transform(questions: Question[], roundNumber: number) : Question[] {
        return questions.filter(question => question.roundNumber === roundNumber);
    }
}