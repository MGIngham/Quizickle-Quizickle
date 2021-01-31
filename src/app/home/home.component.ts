import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateQuizService } from '../shared/services/create-quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private createQuizService: CreateQuizService) { }

  ngOnInit(): void {
    this.createQuizService.getQuizColour("#ffb950");
  }

  nagivateToCreateQuiz() {
    this.router.navigate(['/create-quiz']);
  }

  nagivateToSelectQuiz() {
    this.router.navigate(['/play']);
  }

  navigateToPlayQuiz() {

  }

}
