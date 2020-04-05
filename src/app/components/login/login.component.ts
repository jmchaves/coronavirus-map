import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output()
  submit = new EventEmitter();

  @Output()
  forgotPassword = new EventEmitter();

  @Input()
  loginForm: FormGroup;

  @Input()
  errorMessages: string[];

  @Input()
  loading: boolean[];

  showPassword: boolean;

  constructor() { }


  ngOnInit() {
    this.showPassword = false;
  }

  login() {
    this.submit.emit();
  }

  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
