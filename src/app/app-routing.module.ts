import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialFormComponent } from './create-quiz/initial-form/initial-form.component';
import { QuizBuilderContainerComponent } from './create-quiz/quiz-builder-container/quiz-builder-container.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'create-quiz', component: InitialFormComponent },
    { path: 'quiz-builder/:id', component: QuizBuilderContainerComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}