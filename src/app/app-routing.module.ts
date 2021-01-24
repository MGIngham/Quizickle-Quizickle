import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialFormComponent } from './create-quiz/initial-form/initial-form.component';
import { QuizBuilderContainerComponent } from './create-quiz/quiz-builder-container/quiz-builder-container.component';
import { HomeComponent } from './home/home.component';
import { DisplayAnswersComponent } from './play-quiz/display-answers/display-answers.component';
import { PlayQuizContainerComponent } from './play-quiz/play-quiz-container/play-quiz-container.component';
import { GetQuestionsResolverService } from './shared/services/get-questions-resolver.service';
import { GetRoundsResolverService } from './shared/services/get-rounds-resolver.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'create-quiz', component: InitialFormComponent },
    { path: "answers/quiz/:id", component: DisplayAnswersComponent },
    { path: 'quiz-builder/:id', component: QuizBuilderContainerComponent },
    { path: 'play/quiz/:id', component: PlayQuizContainerComponent, 
                            resolve: {
                                questions: GetQuestionsResolverService,
                                rounds: GetRoundsResolverService
                            } 
                        },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}