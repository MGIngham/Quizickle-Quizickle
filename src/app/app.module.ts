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
import { FilterQuestionsPipe } from './shared/pipes/filter-questions.pipe';
import { PlayQuizContainerComponent } from './play-quiz/play-quiz-container/play-quiz-container.component';
import { FilterRoundsPipe } from './shared/pipes/filter-rounds.pipe';
import { FilterAnswersPipe } from './shared/pipes/filter-answers.pipe';
import { QuestionTextComponent } from './play-quiz/questions/question-text/question-text.component';
import { QuestionMultipleChoiceComponent } from './play-quiz/questions/question-multiple-choice/question-multiple-choice.component';
import { QuestionTrueFalseComponent } from './play-quiz/questions/question-true-false/question-true-false.component';
import { DisplayAnswersComponent } from './play-quiz/display-answers/display-answers.component';
import { SelectQuizComponent } from './play-quiz/select-quiz/select-quiz.component';

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
    QuestionTextFormComponent,
    FilterQuestionsPipe,
    FilterRoundsPipe,
    FilterAnswersPipe,
    PlayQuizContainerComponent,
    QuestionTextComponent,
    QuestionMultipleChoiceComponent,
    QuestionTrueFalseComponent,
    DisplayAnswersComponent,
    SelectQuizComponent
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
