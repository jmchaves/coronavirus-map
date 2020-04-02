import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  @Output()
  submit = new EventEmitter();

  @Input()
  signupForm: FormGroup;

  @Input()
  errorMessages: string[];

  @Input()
  loading: boolean[];

  minBirthDateYear: number;
  maxBirthDateYear: number;
  showPassword: boolean;

  public genders = [
    { display: 'Male', val: 'M' },
    { display: 'Female', val: 'F' },
    { display: 'Prefer not to say', val: 'N/A' }
  ];

  constructor() { }

  ngOnInit() {
    this.showPassword = false;
    this.initBirthDate();
  }

  signup() {
    this.submit.emit();
  }

  initBirthDate(): void {
    const today = new Date();
    this.minBirthDateYear = today.getFullYear() - 95;
    this.maxBirthDateYear = today.getFullYear() - 10;
  }

  get emailAddress() {
    return this.signupForm.get('emailAddress');
  }

  get birthday() {
    return this.signupForm.get('birthday');
  }

  get newPassword() {
    return this.signupForm.get('newPassword');
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get gender() {
    return this.signupForm.get('gender');
  }

  get zipcode() {
    return this.signupForm.get('zipcode');
  }
}
