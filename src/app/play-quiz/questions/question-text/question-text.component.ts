import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/shared/models/question.model';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css']
})
export class QuestionTextComponent implements OnInit {

  @Input() question: Question;

  answerForm: FormGroup;
  
  constructor(private playQuizService: PlayQuizService) { }

  ngOnInit(): void {

    this.answerForm = new FormGroup({
      "answer": new FormControl("", Validators.required)
    })

  }

  submitAnswer() {
    this.playQuizService.evaluateTextAnswer(this.answerForm.get("answer").value, this.question.answerText, this.question);
    console.log("The score is: " + this.playQuizService.score);
  }

}
