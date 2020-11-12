import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-play-quiz-container',
  templateUrl: './play-quiz-container.component.html',
  styleUrls: ['./play-quiz-container.component.css']
})
export class PlayQuizContainerComponent implements OnInit {

  questions: Question[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.questions = this.route.snapshot.data[0];
    console.log(this.questions);

  }

}
