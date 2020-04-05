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

  @Input()
  options: [];

  listHidden: boolean;

  constructor() { }

  ngOnInit() {}

}
