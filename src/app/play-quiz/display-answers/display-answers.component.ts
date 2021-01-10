import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-display-answers',
  templateUrl: './display-answers.component.html',
  styleUrls: ['./display-answers.component.css']
})
export class DisplayAnswersComponent implements OnInit {

  constructor(private playQuizService: PlayQuizService) { }

  score: number;
  answers: Answer[];

  ngOnInit(): void {
    this.score = this.playQuizService.score;
    this.answers = this.playQuizService.answers;
  }

}
