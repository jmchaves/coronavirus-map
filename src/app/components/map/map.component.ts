import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input()
  mapData: any;

  @Input()
  center: number[];

  @Input()
  showFieldTotal: string;

  defaultCenter: number[];

  clusterProperties: any;
  mapHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.defaultCenter = [-103.59179687498357, 40.66995747013945];
    this.setClusterProperties();
    this.mapHidden = true;
    setTimeout(() => {
      this.mapHidden = false;
    }, 1000);
  }

  setClusterProperties() {
    this.clusterProperties = {
      confirmed: ['+', ['get', 'confirmed']],
      deaths: ['+', ['get', 'deaths']],
      recovered: ['+', ['get', 'recovered']]
    };
  }
}
