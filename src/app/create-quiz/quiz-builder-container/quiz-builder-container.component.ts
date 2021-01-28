import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-quiz-builder-container',
  templateUrl: './quiz-builder-container.component.html',
  styleUrls: ['./quiz-builder-container.component.css']
})
export class QuizBuilderContainerComponent implements OnInit {

  quizId: number;

  constructor(private router: Router, private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.quizId = this.createQuizService.quiz.id;
    this.createQuizService.getQuizColour(this.createQuizService.quiz.backgroundColour);
  }

  playQuiz() {
    console.log("Navigating");
    this.router.navigate(['/play/quiz/', this.quizId])
  }

}
