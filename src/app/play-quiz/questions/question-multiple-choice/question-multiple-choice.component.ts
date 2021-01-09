import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/app/shared/models/question.model';
import { PlayQuizService } from 'src/app/shared/services/play-quiz.service';

@Component({
  selector: 'app-question-multiple-choice',
  templateUrl: './question-multiple-choice.component.html',
  styleUrls: ['./question-multiple-choice.component.css']
})
export class QuestionMultipleChoiceComponent implements OnInit {

  @Input() question: Question;

  answerForm: FormGroup;
  options: string[];

  constructor(private playQuizService: PlayQuizService) { }

  ngOnInit(): void {

    this.answerForm = new FormGroup({
      "options": new FormControl()
    })

    this.options = this.shuffleOptions(this.question);

    this.selectAnswer();

  }

  shuffleOptions(question: Question) : string[] {

    let options: string[] = [
      question.optionOne,
      question.optionTwo,
      question.optionThree,
      question.answerText
    ];

    let ctr = options.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = options[ctr];
        options[ctr] = options[index];
        options[index] = temp;
    }

    return options;
  }

  selectAnswer() {

    this.answerForm.get('options').valueChanges
    .subscribe(val => {
      console.log(val);
      this.playQuizService.evaluateTextAnswer(val, this.question.answerText);
    })

  }

}
