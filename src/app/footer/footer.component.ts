import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateQuizService } from '../shared/services/create-quiz.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private createQuizService: CreateQuizService) { }

  themeColour: Observable<string> = this.createQuizService.quizThemeColour.asObservable();

  ngOnInit(): void {
  }

}
