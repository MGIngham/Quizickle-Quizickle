import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateQuizService } from '../shared/services/create-quiz.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private createQuizService: CreateQuizService) { }

  themeColour: Observable<string> = this.createQuizService.quizThemeColour.asObservable();
  //: string;

  ngOnInit(): void {

    /*this.themeColour.subscribe
    (col => {
      this.color = col;
      console.log(this.color);
    })*/
  }

}
