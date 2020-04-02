import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss'],
})
export class SymptomsComponent implements OnInit {

  @Input()
  form: FormGroup;

  listHidden: boolean;

  public symptoms = [
    { val: 'Cough', isChecked: true },
    { val: 'Fever', isChecked: false },
    { val: 'Tiredness', isChecked: false },
    { val: 'Difficulty breathing (severe cases)', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {}

}
