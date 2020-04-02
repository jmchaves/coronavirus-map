import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  @Input()
  form: FormGroup;

  public genders = [
    { display: 'Male', val: 'M' },
    { display: 'Female', val: 'F' },
    { display: 'Prefer not to say', val: null }
  ];

  constructor() { }

  ngOnInit() {}

  get emailAddress() {
    return this.form.get('emailAddress');
  }

  get birthday() {
    return this.form.get('birthday');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get gender() {
    return this.form.get('gender');
  }

  get zipcode() {
    return this.form.get('zipcode');
  }

}
