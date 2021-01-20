import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/app/shared/models/question.model';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-question-true-false',
  templateUrl: './question-true-false.component.html',
  styleUrls: ['./question-true-false.component.css']
})
export class QuestionTrueFalseComponent implements OnInit {

  @Input() question: Question;
  @Input() questionIndex: number;

  answerFormTrueFalse: FormGroup;
  
  constructor(private playQuizService: PlayQuizService) { }

  ngOnInit(): void {

    this.answerFormTrueFalse = new FormGroup({
      "optionsTrueFalse": new FormControl("")
    })

    this.selectAnswer();
  }

  selectAnswer() {

    let correctAnswer = this.question.isTrueFalse.toString();

    this.answerFormTrueFalse.get('optionsTrueFalse').valueChanges
    .subscribe(val => {
      let value = val.toString();
      console.log(val);
      this.playQuizService.evaluateTextAnswer(value, correctAnswer, this.question);
    })

  }

}
