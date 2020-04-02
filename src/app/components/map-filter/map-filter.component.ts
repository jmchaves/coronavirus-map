import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss'],
})
export class MapFilterComponent implements OnInit {

  public options = [
    { val: 'Who has tested positive', isChecked: false },
    { val: 'People recovered', isChecked: false },
    { val: 'Supplies', isChecked: false }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
