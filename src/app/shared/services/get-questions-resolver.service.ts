import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Question } from '../models/question.model';
import { CentralDataProvider } from './central-data-provider.service';

@Injectable({providedIn: 'root'})
export class GetQuestionsResolverService implements Resolve<Question[]> {

    constructor(private centralDataService: CentralDataProvider) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.centralDataService.getQuestionsByQuizId(route.paramMap.get('id'))
        .pipe(
            catchError((error) => {
                return empty();
            })
        )

    }
}