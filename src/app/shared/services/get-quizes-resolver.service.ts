import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { Quiz } from "../models/quiz.model";
import { CentralDataProvider } from "./central-data-provider.service";

@Injectable({providedIn: 'root'})
export class GetQuizesResolverService implements Resolve<Quiz[]> {
    constructor(private centralDataService: CentralDataProvider) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.centralDataService.getQuizes()
        .pipe(
            catchError((error) => {
                return empty();
            })
        )
    }
}