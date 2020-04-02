import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input()
  profileform: FormGroup;

  @Output()
  saveChanges = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.saveChanges.emit();
  }
}
