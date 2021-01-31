import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialFormComponent } from './create-quiz/initial-form/initial-form.component';
import { QuizBuilderContainerComponent } from './create-quiz/quiz-builder-container/quiz-builder-container.component';
import { HomeComponent } from './home/home.component';
import { DisplayAnswersComponent } from './play-quiz/display-answers/display-answers.component';
import { PlayQuizContainerComponent } from './play-quiz/play-quiz-container/play-quiz-container.component';
import { GetQuestionsResolverService } from './shared/services/get-questions-resolver.service';
import { GetRoundsResolverService } from './shared/services/get-rounds-resolver.service';
import { GetQuizResolverService } from './shared/services/get-quiz-resolver.service';
import { SelectQuizComponent } from './play-quiz/select-quiz/select-quiz.component';
import { GetQuizesResolverService } from './shared/services/get-quizes-resolver.service';
import { AuthComponent } from './auth/auth/auth.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'create-quiz', component: InitialFormComponent },
    { path: 'answers/quiz/:id', component: DisplayAnswersComponent },
    { path: 'quiz-builder/:id', component: QuizBuilderContainerComponent },
    { path: 'play', component: SelectQuizComponent, resolve: {quizes: GetQuizesResolverService} },
    { path: 'play/quiz/:id', component: PlayQuizContainerComponent, 
                            resolve: {
                                quiz: GetQuizResolverService,
                                questions: GetQuestionsResolverService,
                                rounds: GetRoundsResolverService
                            } 
                        },
    { path: 'auth', component: AuthComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}