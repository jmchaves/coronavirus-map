import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss'],
})
export class SuppliesComponent implements OnInit {

  @Input()
  form: FormGroup;

  listHidden: boolean;

  public supplies = [
    { val: 'Toilet Paper', isChecked: true },
    { val: 'Soap or Hand Sanitizer', isChecked: false },
    { val: 'Food', isChecked: false },
    { val: 'Water', isChecked: false },
    { val: 'First Aid Kit', isChecked: false },
    { val: 'Baby Supplies', isChecked: false },
  ];

  constructor() { }

  ngOnInit() {}

}
