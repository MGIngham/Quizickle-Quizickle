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
import { StandardButtonComponent } from './standard-button/standard-button.component';
import { CentralDataProvider } from './shared/services/central-data-provider.service';
import { QuizBuilderContainerComponent } from './create-quiz/quiz-builder-container/quiz-builder-container.component';
import { CreateQuizService } from './shared/services/create-quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InitialFormComponent,
    ColourPickerComponent,
    StandardButtonComponent,
    QuizBuilderContainerComponent
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
