import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { Round } from "../models/round.model";
import { CentralDataProvider } from "./central-data-provider.service";

@Injectable({providedIn: 'root'})
export class GetRoundsResolverService implements Resolve<Round[]> {
    constructor(private centralDataService: CentralDataProvider) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.centralDataService.getRoundsByQuizId(route.paramMap.get('id'))
        .pipe(
            catchError((error) => {
                return empty();
            })
        )
    }
}