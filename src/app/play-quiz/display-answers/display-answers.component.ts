import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Answer } from 'src/app/shared/models/answer.model';
import { Round } from 'src/app/shared/models/round.model';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-display-answers',
  templateUrl: './display-answers.component.html',
  styleUrls: ['./display-answers.component.css']
})
export class DisplayAnswersComponent implements OnInit {

  constructor(private playQuizService: PlayQuizService, private route: ActivatedRoute) { }

  roundsSubscription: Subscription;
  score: number;
  answers: Answer[];
  rounds: Round[] = [];

  ngOnInit(): void {

    const quizId = +this.route.snapshot.paramMap.get('id');


    this.score = this.playQuizService.score;
    this.answers = this.playQuizService.answers;
    this.playQuizService.getRounds(quizId);

    this.roundsSubscription = this.playQuizService.rounds
    .subscribe(rounds => {
      this.rounds = rounds;
      console.log(this.rounds);
    })

  }

}
