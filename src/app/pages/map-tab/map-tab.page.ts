import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapFilterComponent } from '../../components/map-filter/map-filter.component';

@Component({
  selector: 'app-map-tab.page',
  templateUrl: './map-tab.page.html',
  styleUrls: ['./map-tab.page.scss'],
})
export class MapTabPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: MapFilterComponent
    });
    return await modal.present();
  }

}
