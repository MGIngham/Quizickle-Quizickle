import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../models/question.model';
import { Round } from '../models/round.model';

@Pipe({name: 'filterRounds'})
export class FilterRoundsPipe implements PipeTransform {
    transform(rounds: Round[], roundNumber: number) : Round[] {
        return rounds.filter(r => r.roundNumber == roundNumber)
    }
}