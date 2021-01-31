import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  isLoginMode: boolean = true;

  authForm: FormGroup;

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'username': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.compose([Validators.required, Validators.minLength(6)]))})
  }

  onChangeMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
