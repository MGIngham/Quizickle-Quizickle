import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InitialFormComponent } from './create-quiz/initial-form/initial-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColourPickerComponent } from './create-quiz/colour-picker/colour-picker.component';
import { CentralDataProvider } from './shared/services/central-data-provider.service';
import { QuizBuilderContainerComponent } from './create-quiz/quiz-builder-container/quiz-builder-container.component';
import { CreateQuizService } from './shared/services/create-quiz.service';
import { RoundBuilderContainerComponent } from './create-quiz/rounds/round-builder-container/round-builder-container.component';
import { RoundComponent } from './create-quiz/rounds/round/round.component';
import { ErrorContainerComponent } from './error-container/error-container.component';
import { AppButtonDirective } from './app-button.directive';
import { QuestionBuilderContainerComponent } from './create-quiz/questions/question-builder-container/question-builder-container.component';
import { QuestionMultipleChoiceFormComponent } from './create-quiz/questions/question-multiple-choice-form/question-multiple-choice-form.component';
import { QuestionTrueFalseFormComponent } from './create-quiz/questions/question-true-false-form/question-true-false-form.component';
import { QuestionTextFormComponent } from './create-quiz/questions/question-text-form/question-text-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InitialFormComponent,
    ColourPickerComponent,
    QuizBuilderContainerComponent,
    RoundBuilderContainerComponent,
    QuestionBuilderContainerComponent,
    RoundComponent,
    ErrorContainerComponent,
    AppButtonDirective,
    QuestionMultipleChoiceFormComponent,
    QuestionTrueFalseFormComponent,
    QuestionTextFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CentralDataProvider,CreateQuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
