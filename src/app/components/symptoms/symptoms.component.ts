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

  @Input()
  options: [];

  listHidden: boolean;

  constructor() { }

  ngOnInit() {}

}
