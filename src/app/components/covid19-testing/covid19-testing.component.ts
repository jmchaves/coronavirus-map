import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-covid19-testing',
  templateUrl: './covid19-testing.component.html',
  styleUrls: ['./covid19-testing.component.scss'],
})
export class Covid19TestingComponent implements OnInit {

  @Input()
  form: FormGroup;

  @Input()
  options: [];

  listHidden: boolean;

  constructor() { }

  ngOnInit() {}

}
