import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapTabPage } from './map-tab.page';
import { MapComponent } from '../../components/map/map.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxMapboxGLModule.withConfig(environment.mapBoxAccess),
    RouterModule.forChild([{ path: '', component: MapTabPage }])
  ],
  declarations: [MapTabPage, MapComponent]
})
export class MapTabPageModule {}
