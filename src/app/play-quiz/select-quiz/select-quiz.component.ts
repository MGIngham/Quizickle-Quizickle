import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/shared/models/quiz.model';
import { CreateQuizService } from 'src/app/shared/services/create-quiz.service';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private createQuizService: CreateQuizService) { }

  quizes: Quiz[] = [];

  ngOnInit(): void {
    this.quizes = this.route.snapshot.data["quizes"];
    this.createQuizService.getQuizColour("#ffb950");
    console.log(this.quizes);
  }

  selectQuiz(id: number) {
    this.router.navigate(['/play/quiz/', id])
  }

}
