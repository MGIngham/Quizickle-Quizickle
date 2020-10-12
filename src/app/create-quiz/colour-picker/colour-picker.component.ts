import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {

  @Input() initialForm: FormGroup;
  
  colours = [
    "#FF5733",
    "#FFAB33",
    "#FFEC33",
    "#56FF33",
    "#33DCFF",
    "#AF33FF",
    "#FF33CD",
    "#AE3556"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
