import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  templateUrl: './standard-button.component.html',
  styleUrls: ['./standard-button.component.css']
})
export class StandardButtonComponent implements OnInit {

  @Input() setButtonText: string;
  @Input() setButtonSize: string;
  @Input() isEnabled: boolean;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if(this.setButtonSize.match(/^(s|m|l)$/)) {
      this.setButtonSize = this.setButtonSize;
    } else {
      this.setButtonSize = 'l';
    }
  }

  onButtonClick(){
    this.buttonClicked.emit(null);
  }

}
