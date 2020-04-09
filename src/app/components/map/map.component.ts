import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  mapHidden: boolean;
  data: any;
  clusterProperties: any;

  constructor() { }

  ngOnInit() {
    this.clusterProperties = {
      confirmed: ['+', ['get', 'confirmed']]
    };
    this.mapHidden = true;
    // this.readTextFile();
    this.data = {
      "type": "FeatureCollection",
      "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
      "features": [
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.46170658, 34.22333378 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 86, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.41419698, 30.2950649 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.63234615, 37.76707161 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 438, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.2415516, 43.4526575 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.47105874, 41.33075609 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.28129668, 37.10459774 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.60078167, 40.19058551 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.65859267, 35.88494195 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 417, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.3362578, 39.87432092 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.4545247, 44.89333571 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.18786813, 39.98815591 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.93671406, 40.7457653 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.35326037, 31.47669768 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.50117804, 40.5244942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.4718964, 38.84541072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.21610347, 39.87140411 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.5601734, 46.98299757 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.76782777, 43.96974651 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.14130877, 44.03217337 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.63645384, 33.54338026 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 144, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.35928158, 29.67866525 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.39976137, 36.0434701 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 674, "deaths": "16", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.8929271, 37.64629437 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.7885451, 37.57250606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 342, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.97723916, 42.60060306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.7235415, 41.65498705 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.55481085, 38.02080697 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.57996173, 34.88084463 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.17751948, 35.9223796 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 143, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.08183073, 38.814003 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.37860922, 43.28383218 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.89102866, 42.59147037 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.69280486, 39.62357628 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.02750466, 42.25748406 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.12857041, 36.49360862 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.00222498, 37.78636074 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 720, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.98167747, 40.46809875 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 95, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.06800636, 41.09194313 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.19457544, 36.75197631 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 65, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.82442028, 30.65385745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.10802343, 40.77285242 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.35321066, 32.98837386 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.8223594, 38.59678594 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.65696, 38.44583082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.98584649, 37.34081025 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.14548696, 37.60308293 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.80501621, 31.17467303 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 103, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -149.1426986, 61.14998174 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.29272815, 38.21413251 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.99171713, 38.00671029 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 75, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.63959517, 34.51828081 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.19965764, 36.12684348 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.65354823, 31.81534745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6376548, 32.30468633 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.20380627, 44.1664747 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.60901487, 31.25457347 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 466, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.60329337, 39.00670238 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.24604565, 45.27476015 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.09953279, 34.97403241 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.0666283, 42.17695516 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.15503082, 44.99690221 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 78, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.3783, 35.5313 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.86865906, 40.74324454 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.28909114, 31.74847232 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.81340003, 37.37569884 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.9995047, 28.10556197 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 764, "deaths": "19", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.3353617, 39.64977461 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.0476867, 37.19474156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.89277559, 44.0636262 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.37277296, 34.29145151 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 254, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.10139853, 38.8767675 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.46290811, 40.81665618 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -68.59841248, 46.65926321 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 366, "deaths": "15", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.9132841, 30.20406249 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.49862729, 36.43296207 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.27280781, 40.84772277 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.67837132, 46.31956891 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.7698471, 33.19153461 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.74830218, 41.70860332 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.2022851, 46.18894415 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 89, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.06461642, 29.89946234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.52730485, 28.89333001 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.30870026, 39.53185661 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.42970639, 40.43238737 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.04278644, 39.33425634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.87545866, 31.29633502 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 168, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.65848483, 39.47538693 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.03802487, 34.37366573 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.57838564, 33.08658803 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.90581859, 41.6844628 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.2242143, 40.55998859 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.12461614, 38.16404586 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.56050467, 43.71757685 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.27736949, 29.88548725 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.64408227, 32.53952745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.00079449, 31.07796211 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.5603223, 37.31940883 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.45936528, 31.55456473 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.28467476, 30.33060121 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.44218806, 31.32669878 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.72207058, 30.72774991 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.24701748, 33.06882326 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 866, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.62911955, 39.45784712 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 571, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.61151012, 39.30211911 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.05659969, 33.21927586 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.24598147, 29.74619598 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.49644388, 34.35607081 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.2233311, 42.67002716 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.68460053, 37.2288586 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.3871286, 31.868263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.00350858, 39.1307219 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.06605978, 46.93579637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 423, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.28854339, 41.72980578 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.43584352, 33.26679302 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.93338945, 36.96469836 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.84833627, 45.42372701 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.71436292, 33.99148694 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.30834519, 42.59513984 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.82919888, 36.70978521 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 66, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.89558181, 39.20744865 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.75636726, 38.47889676 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 192, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.83887523, 34.23732119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.31206354, 30.10370699 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.34113157, 38.25271289 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.74588932, 38.14735938 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.73912095, 38.05852573 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.33782872, 36.28784385 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.62122584, 30.26548745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.98731479, 43.70639106 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.19716729, 46.52868768 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.27858469, 44.41464384 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.84325809, 35.48531943 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 169, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.72619758, 32.39226291 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.34173616, 30.64836518 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.4758872, 36.7496847 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 128, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.34921611, 40.6825484 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.8984694, 45.13434354 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.68128023, 35.26862449 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.48998442, 40.00522157 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.45549096, 35.51123746 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.5281964, 37.3080028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.41684235, 43.51637314 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 74, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.4785025, 31.03736027 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.9924051, 40.01625942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.93732139, 47.97373527 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.22145359, 31.76095874 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.09048868, 43.03519828 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.25680817, 36.33644656 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.31093999, 40.60626947 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.06463573, 42.08011739 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.99514135, 45.69804958 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.18945516, 34.81681228 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.28756116, 38.29503305 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.4316987, 44.49167306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.06849355, 36.07110411 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 179, "deaths": "19", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.5120834, 46.23946995 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.01608482, 44.63899297 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7874, "deaths": "314", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.07164325, 40.96010917 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 55, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.94654523, 33.20222596 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 66, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.02414609, 39.46704621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 416, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.92457766, 40.41570541 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 281, "deaths": "18", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.20524838, 42.37428441 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 307, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.6703554, 35.05163625 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.2252992, 31.27590016 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 72, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.4131308, 41.95447397 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.96545943, 36.0688473 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -159.8561831, 60.90980451 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 503, "deaths": "18", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.52019748, 29.44928723 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.1251146, 32.99642064 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 50, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.70489165, 32.80904227 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.05398492, 32.34569994 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.41403739, 45.42712824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.3978437, 43.2167288 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.30524729, 42.4704581 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.32499702, 40.47388153 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.56180059, 34.61296243 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 428, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.9752658, 43.4085812 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.34917412, 40.47961444 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.3999852, 30.26640707 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.13599391, 37.13128068 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.33035166, 32.43829035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.20611967, 35.59942968 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.56790593, 33.98210918 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.92847788, 35.68938198 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.06699781, 44.03554215 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 54, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.87372121, 33.79696941 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.02725304, 37.32449052 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.88592746, 42.98914167 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.43534887, 38.88829622 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.6017932, 48.29996017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.6161537, 43.38713372 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.09374925, 36.3084504 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.82345779, 42.32359279 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.46841646, 40.0509304 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.9313999, 42.03657094 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.72615357, 38.97065142 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.30723575, 38.99186229 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.69888019, 38.01974191 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 159, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.60460152, 32.67932307 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.80982182, 37.55531756 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 207, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.3546767, 40.09313619 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.84865997, 37.85508555 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.21827874, 38.2054607 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.41834132, 33.44626922 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.5203343, 46.11285362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.0832816, 41.52106798 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.68652187, 38.36176608 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.8633779, 37.62680923 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.08532444, 38.69158994 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.16611613, 29.95079741 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.51570822, 41.78869215 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.15980837, 33.46755808 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.857186, 35.15739424 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.05929476, 41.91600556 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.97743999, 31.19576557 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.72011184, 38.70036159 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 173, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.44563172, 29.18757369 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.30205577, 30.6636448 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.31959161, 37.52333168 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.42885017, 37.77377239 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.31795937, 42.77461496 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 102, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.73091022, 28.29409504 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 835, "deaths": "23", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.10872211, 41.79228404 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.28652315, 41.71018079 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.16359122, 36.6163024 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.4955813, 46.33277565 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.57915332, 40.27367263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.79079945, 44.36974375 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.58303423, 30.83922642 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 93, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.81326086, 42.15903158 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 52, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.0566324, 39.95998787 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2358, "deaths": "58", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.48725556, 26.15184651 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.22868909, 39.19605589 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.72562874, 44.24205652 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.86788395, 38.93416837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.35165355, 45.58994323 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.99907113, 31.77430356 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.00411844, 44.4526553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.22814204, 34.070565 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.8593436, 36.76366949 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.44002948, 32.00979311 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.25903472, 33.96472458 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.83510825, 42.4709188 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.80138942, 39.65816401 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.03749726, 37.26818323 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.52518834, 37.57242268 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 816, "deaths": "24", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.10836643, 40.33682119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.15100162, 42.73545875 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.35296097, 37.73484642 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.07500296, 40.85486962 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.75332578, 44.37835084 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.68955617, 37.97162523 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.74811421, 32.39577406 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.71265535, 32.10030533 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.53305, 35.61113393 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.5283051, 41.40385234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.99928721, 33.05917989 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.70755735, 35.74989637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.5182117, 48.79094471 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.4645214, 46.97847375 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.62158484, 30.49273808 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 801, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.66927768, 39.87681124 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.181887, 30.78801353 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.68057478, 31.75300095 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.79015971, 42.73172833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.83878537, 37.78134351 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.68748787, 37.20946153 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.40421163, 36.71462476 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 102, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.57388716, 39.44012838 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 113, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.91351055, 40.91152759 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.6005252, 39.66727762 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.5079318, 44.90608745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.9543504, 33.2830945 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 88, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.55267168, 35.3877799 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.23855912, 38.42424062 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.7443667, 41.72330587 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 803, "deaths": "25", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.88375652, 32.57991587 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.37534464, 35.17364557 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.552913, 38.20537103 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 191, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.35400434, 30.22931235 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.86948214, 37.14749129 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.11752148, 32.0902519 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.98308093, 39.65620858 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.54799522, 35.95204977 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.61814775, 29.83668859 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.10314651, 44.46548598 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 49, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.82630386, 33.77483727 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.19394153, 30.40666734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.62725131, 31.53169785 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.66330078, 39.16840183 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.00493569, 42.24633834 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.33686647, 33.93683395 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.77722168, 33.66926881 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.61633945, 28.47048236 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.37326312, 32.29760619 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.92186505, 38.83674754 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.2731593, 36.62093411 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.21780273, 44.0816316 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.56820632, 38.53961642 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.8065892, 43.46665742 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.71377428, 40.49527404 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.66601818, 30.92951916 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.76083747, 38.02199522 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 838, "deaths": "22", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.96388753, 39.80343818 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.19310676, 29.87592238 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.20376845, 41.43625568 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.48140372, 26.14524221 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.97790104, 32.97195142 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.37875208, 38.94384345 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.1510856, 36.40355516 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.09678609, 37.20553386 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.5474404, 44.24886082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 40, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.98465569, 35.5426055 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.07702563, 32.40209349 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.05738983, 35.80990797 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 114, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7095499, 43.61970148 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.6843587, 37.38489388 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 100, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.80170244, 39.15008829 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.0274047, 45.22850116 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.7068525, 40.91545395 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.5872512, 39.64834818 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.9326084, 41.69357844 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.5597683, 42.77149116 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.67601019, 46.59180601 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.82904158, 38.87172293 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.34901405, 38.02679129 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.54270261, 36.3403856 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 183, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.07976677, 33.58138199 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.93395545, 42.06823429 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.56198812, 40.5807832 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.86032705, 42.03617207 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.12601074, 38.66599534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 186, "deaths": "18", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.02373735, 39.56453592 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.91994479, 33.44834567 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.20430216, 43.87498583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.09178213, 40.5789686 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.45189331, 35.97366108 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.73455942, 36.73066666 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.7480219, 39.15509045 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.05092385, 38.31690743 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.96051322, 36.94160441 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.28552485, 34.25103751 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.12588974, 36.28969086 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.54120135, 34.8932941 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.8009918, 44.82017001 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.3467922, 47.30797024 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.34830753, 40.76135835 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.99405727, 41.91522292 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.32603968, 46.95043611 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.353399, 38.64789422 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.13971217, 40.90899107 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.2444719, 46.93201724 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.34646905, 33.07499881 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.6012409, 42.28347888 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.2617243, 34.53016752 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.33353281, 36.39312665 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.84526385, 31.66778967 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.2132617, 35.66211129 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.13757014, 34.89872298 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.4046587, 33.91514144 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.67923096, 42.24778241 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.55731592, 42.91261714 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 49, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.94627411, 39.56647682 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.13246684, 41.77233777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.85445441, 37.72391475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 57, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.82200624, 40.92058903 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.2612239, 43.08177563 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.1926573, 38.74745778 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 109, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.39072749, 32.91360079 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.67154501, 29.70972016 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 69, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.20046615, 40.13919438 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.76875242, 40.13923427 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.9629191, 39.51499357 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 164, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.98580666, 38.51092331 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.05634116, 37.35358063 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.58856175, 43.20660134 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 305, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.96512315, 32.82487866 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.19614053, 45.37790017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.92949121, 26.90131002 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.66314092, 37.01909701 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.48569588, 38.03527919 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.13951596, 30.78371028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 125, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.12489526, 32.00043026 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.25541492, 35.70394416 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.78809239, 32.34341231 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.34535662, 34.47197698 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.2454192, 37.14994405 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.36691763, 42.2276921 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.4665365, 33.36406072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.08903581, 36.26136216 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.50122149, 45.44787015 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.6173956, 47.87046092 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 55, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.7638805, 42.13891056 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 53, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.60887553, 42.49430041 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.60638968, 34.17805983 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 151, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.47431861, 34.24393976 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.8462897, 37.16928494 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.05970864, 35.1349263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.99980896, 35.90692775 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.61828622, 35.05122251 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.16559897, 31.837258 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.1244332, 42.54502621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.30545744, 36.67670048 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.25311043, 42.92015988 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 373, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.74768357, 39.97291773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.1583216, 34.69249168 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.6095842, 35.42527478 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.1564014, 34.64137396 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 145, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.5868014, 37.37373208 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.9941693, 41.21999357 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.31773347, 43.06001295 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.9481545, 33.91983202 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.29539209, 33.26458973 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.7173256, 32.85044126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.54353449, 46.29552653 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.28068855, 45.06939744 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.90861945, 45.5021011 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 308, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.08359212, 44.46322849 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.2656443, 32.02227341 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.24809382, 33.34598242 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.54771129, 34.02807439 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.60118385, 36.12908077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.27780482, 39.54581621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.49055367, 36.89267803 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.18537118, 36.9711783 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.998876, 34.91131525 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 54, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.47614748, 28.84804315 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 97, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.2179634, 45.18787398 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.99526883, 32.82308512 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.90702196, 31.97061673 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.65947309, 36.48319149 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.9226319, 48.04754642 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.8481986, 43.98794227 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 68, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.21647898, 33.66610974 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.42413524, 41.19265812 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.17484713, 34.04613432 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.78705622, 39.33425789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 86, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.70510334, 38.48015445 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.14615986, 37.9689263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.73661677, 40.41040752 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1878, "deaths": "65", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.0130241, 36.21458855 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.78498252, 39.91592258 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.72925109, 44.85834507 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 190, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.4829204, 45.77568046 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.61207486, 44.73483377 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.83548597, 31.68099859 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 81, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.37124007, 33.95436462 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.78499767, 41.02868181 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.6889622, 32.04158545 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.99199425, 39.11271747 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.660711, 45.99712889 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.85836077, 33.26984193 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.4148172, 36.36826212 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 97, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.85609986, 29.98319144 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.97713865, 31.62221166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.11723506, 39.39561833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.15096481, 43.08247182 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.16518128, 39.34948772 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.48761922, 46.89289518 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.77784255, 33.65358105 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.41850862, 39.31132056 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.74353633, 35.05704275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.97656917, 42.91296147 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.53930419, 36.55151008 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.20771198, 33.78686685 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 293, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.35594188, 33.54187245 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.34133693, 42.84443388 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.6463118, 39.68864463 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.47592663, 41.00110782 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.37790562, 47.57992111 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.52005899, 33.67679204 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.02640019, 35.53864922 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.15375786, 39.04847534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.18537045, 33.89723187 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.55204486, 35.33553364 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 212, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.32519562, 35.20413532 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.70432472, 30.91395822 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.42385254, 38.60704876 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.47277257, 40.30319754 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.53275096, 41.89981633 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.13377529, 36.72581156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 82, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.60145248, 42.94400871 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.40465394, 39.6013098 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.67875352, 44.74530905 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.80852286, 39.41485808 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.63785995, 41.23255967 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.64925343, 39.48028352 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.60415045, 34.22772299 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 588, "deaths": "29", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.5761255, 33.94243204 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.7516088, 31.87934684 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.11828725, 35.9278914 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 288, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.4753, 35.6648 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.18827677, 44.97788119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.98901039, 31.39932826 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.8549206, 31.54892966 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.07311784, 35.49090731 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.73379515, 38.2365018 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.80168544, 34.69847452 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.27860244, 38.50455671 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.22358557, 39.51949084 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.0868542, 41.57486951 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.67641292, 32.87582989 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 277, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.34687065, 26.11091986 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 343, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.57264368, 33.18820114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.39609676, 37.26420587 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.5273805, 29.622098 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 68, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.7677946, 31.18810588 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.22642793, 33.21230701 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.62160164, 30.22509788 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.263524, 33.54534185 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.63089095, 42.24819348 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.0890898, 45.94464254 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 54, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.40565017, 41.04821986 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.9051983, 46.29442881 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.33589004, 43.46492199 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 71, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.78094576, 40.76932373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.65801424, 34.26744084 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.2331726, 39.17881957 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.27647225, 29.80811278 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.47195055, 34.65973764 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.55876441, 31.94854689 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.63814433, 31.44817835 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.99320044, 31.43401703 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 462, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.9289527, 37.91923498 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.5081848, 42.97272268 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.70506566, 35.26205537 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.42947229, 31.16068491 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10520, "deaths": "310", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.81658794, 41.84144849 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.80896081, 38.844478 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.30633239, 44.69063265 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.24847739, 32.93690146 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.44565118, 31.86977774 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.07048931, 42.59509207 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.79936155, 31.39078397 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.91729018, 40.30096166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.4276548, 37.27732493 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.37053567, 34.28845626 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.18138802, 44.00715262 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.45050893, 31.2477854 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.55389939, 31.63225413 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.98631446, 37.7824656 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 79, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.76129976, 33.35334302 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.83776647, 37.23781842 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.6782231, 46.19074721 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.20916602, 36.76268118 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.21072274, 37.48133648 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.63235729, 35.83018283 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.5143314, 31.43052248 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.08398081, 35.11833364 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.2446814, 35.58928601 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.98061238, 32.71391813 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.75954624, 39.0032229 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.44518825, 38.28814402 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.3819718, 42.03718237 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.85245778, 37.50675523 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.61006219, 44.68255561 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.30528104, 37.97663738 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.91989099, 40.85065156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.10760592, 41.68447709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.93073686, 43.23870316 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.37086028, 35.90230551 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.31593104, 31.72941803 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.76811843, 31.92289565 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 61, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.30839406, 35.21247318 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.0882609, 37.35839237 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.14916269, 35.81830662 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.356297, 44.14230227 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.5697705, 44.58855102 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3000364, 33.61431553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.77185818, 35.29631396 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.06755609, 46.48096553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.7844965, 38.32608609 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.86888037, 34.13020303 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.9563087, 38.48199985 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.2401158, 39.27432424 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.39050034, 36.78926125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 262, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.37226999, 43.8370751 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 80, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.10712559, 39.37199394 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 66, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.82623165, 35.04762133 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 84, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.26130755, 40.1625372 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.99840585, 35.95271721 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.24398086, 37.51328851 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.78730772, 41.91637624 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.95876401, 36.36123664 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.3468876, 34.57421077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -124.157282, 42.45911325 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.3683478, 38.10883162 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.2855494, 44.24186819 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.72805369, 41.39374521 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.00170785, 35.63853802 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 960, "deaths": "23", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.65918339, 41.424119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.50490424, 34.8549167 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 75, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.06299363, 44.67172617 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.61095742, 31.43037123 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6020725, 36.27787176 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.1086671, 32.32688101 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.65167437, 33.97042763 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.04127625, 41.68560356 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.02127031, 37.6811355 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1324, "deaths": "20", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.7779605, 32.76670599 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 303, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.41733797, 43.06601594 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.40395668, 36.58022376 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.71767334, 35.66520691 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.6194517, 40.13412966 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.96027485, 34.33358335 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 168, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.77993242, 40.41377078 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 73, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.21256572, 35.79115496 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 946, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.78646056, 36.17007426 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.54496571, 35.93099927 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.07185406, 38.70186039 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 58, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.0901948, 37.73028906 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 163, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.1139997, 40.99001837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.14458906, 43.67490933 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.16964071, 34.44244079 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.8201461, 40.87028216 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.9477242, 32.74255572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 91, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.74130302, 32.05457447 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.90959682, 40.17514519 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.80782906, 34.45946862 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 706, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.22396017, 33.76944049 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.76958483, 41.89373302 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.99906934, 41.39804622 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.40476508, 39.89201062 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.83689361, 35.97616272 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.80941373, 27.18677893 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 144, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.99091418, 34.87625235 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.3568117, 29.08101855 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6054267, 34.96522957 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.97333539, 39.14647946 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.57619536, 30.87967778 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.50087166, 39.30712658 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.11043779, 35.60048904 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.073353, 46.05953325 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.49076944, 41.32398837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.8974063, 41.74228275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.39732772, 40.22787247 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.3664492, 42.47104597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.96709306, 42.19837623 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 79, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.00457058, 40.27942393 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.80325046, 36.40823634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1034, "deaths": "23", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.40243663, 39.91680171 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.8631342, 38.86246243 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.9080745, 45.9048491 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 366, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.11691153, 33.20521901 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 927, "deaths": "33", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.8725695, 39.76018276 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.18326592, 40.92012606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.2289121, 43.91570171 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.25500948, 33.83011025 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.66943645, 44.75994309 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.00730714, 35.98772922 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.7788855, 33.61616822 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.35124171, 37.12560977 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.1510206, 43.37787725 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.86961634, 46.00999672 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.35891709, 36.14669837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.37741872, 34.39007791 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.63451754, 37.07544585 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1440, "deaths": "27", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.01655992, 38.90417773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.4873611, 48.8149387 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.15724673, 29.60631086 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.16948926, 32.17265114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.86244324, 44.02238415 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.65598179, 41.58071748 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.70928178, 43.41576662 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.8329387, 32.35275771 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.14056866, 39.79067154 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.8140093, 34.96517499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.79746561, 32.15630737 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.30002707, 44.95856458 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.02752426, 38.45413522 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.40502652, 33.0794369 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 986, "deaths": "61", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.21722377, 31.53328528 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 244, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.930001, 39.33133796 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 122, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.77026156, 33.70291126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.21854195, 39.76768052 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.2925121, 38.88503636 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.45335469, 45.93348491 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 181, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.15085305, 41.29518299 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.6171333, 38.912862 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.167291, 43.27941273 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.692937, 47.7361335 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.91595768, 46.43222285 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.71777921, 33.59035001 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 875, "deaths": "30", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.08642662, 41.85116968 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.8792417, 38.36597551 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.88181925, 42.46815349 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.425237, 40.29772254 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.68763497, 41.40674725 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.09122243, 36.27167174 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6160468, 47.35423935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.8962481, 44.94562799 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.93140529, 34.93449805 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 236, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.87608331, 36.03638492 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1395, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.74356679, 41.7648606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 549, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.66976468, 30.33225875 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.41542855, 36.05931946 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 374, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.6933637, 39.62754308 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 98, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.90255207, 31.32155345 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 935, "deaths": "33", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.09777565, 30.53842039 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.23425694, 32.73926954 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.04976723, 30.84425359 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.83243566, 32.32743996 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.83740035, 42.59599185 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.28609183, 44.726614 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.89687287, 30.71101099 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.5429428, 31.86898877 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.3053527, 32.47167456 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.90432337, 47.71701474 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.59436892, 35.91230639 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.96231108, 33.77221995 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.23955613, 37.21218923 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.34280942, 32.36616021 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.58969584, 39.05935711 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.5233166, 38.77965956 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 472, "deaths": "30", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.5251411, 38.83240149 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 153, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.2363275, 31.76980765 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.1358721, 39.28656773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.83936148, 34.11302332 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.64524744, 41.42822061 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.85875695, 41.59761169 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.3577619, 41.14531606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.79371841, 32.34894117 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.14415284, 32.59785413 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.4701578, 43.3507101 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.30239915, 32.59221302 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.7013958, 38.99617072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.89083249, 45.52625509 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.2389766, 46.28398398 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.53406129, 36.69455571 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.21773417, 32.23602653 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1335, "deaths": "45", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.73063652, 42.76249024 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.62904521, 41.36796058 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.03301954, 41.99253829 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.15918694, 31.1256789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 180, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.37284571, 30.67652764 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2103, "deaths": "50", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.94687179, 42.6687626 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5598, "deaths": "276", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.24657979, 40.78681335 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.77297842, 44.11630765 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.94230311, 37.93357639 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 43, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.04051873, 34.04567266 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.39915924, 30.72985248 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 71, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -146.5692662, 64.80726247 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 570, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.27565836, 38.83677558 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.2977964, 38.85157547 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4136, "deaths": "132", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.3881171, 41.26809896 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 65, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.63088163, 39.75107189 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.1195624, 34.39287073 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.5275691, 43.23929297 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.93630086, 31.25350609 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.17560759, 38.88485255 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.316964, 34.86430205 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.10751083, 33.59564294 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.94787458, 43.67381499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.14535601, 45.07082625 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 55, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.33717519, 35.14719007 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.80647472, 38.73564842 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.73886638, 33.72076938 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 85, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.49089434, 33.41357794 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.02452658, 39.00072038 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.17797541, 39.63684962 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.8441231, 42.86271799 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 123, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.45576892, 38.0368225 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.4562016, 39.56021306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.64291195, 39.92041012 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.41399032, 35.19615831 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.92076062, 29.87788372 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.08286634, 38.02974928 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.92870012, 36.38128818 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.5154041, 48.4711431 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.08980382, 43.67394126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.7381938, 38.04340344 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.31508595, 29.45933576 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.0520569, 48.29575866 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.70189312, 34.02361754 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.39804137, 45.84963535 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 93, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.21577392, 34.26268279 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.90385377, 38.32117957 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3031546, 34.07227468 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.36738849, 36.9302126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.27715475, 37.84157909 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.48885325, 43.75354908 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.22350769, 40.59706922 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.88825298, 37.69200114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.23229292, 41.51095103 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 59, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.25832496, 31.18961454 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.1231513, 34.22604035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.25459052, 36.12859861 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 417, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.77219463, 29.52704478 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.88279923, 47.4571084 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.24217689, 40.12361933 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.84289505, 34.44235334 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.89299569, 35.51202821 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.82731662, 29.83791238 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.23159927, 34.37525597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.92567818, 37.99189086 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 61, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.06062647, 39.4142482 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.26256925, 42.73270384 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.28644341, 38.56443815 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.87962551, 38.2379395 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.67589857, 32.13675181 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.44381045, 44.97330019 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 117, "deaths": "21", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.58602547, 42.58119713 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.89672989, 31.47786634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.07522826, 38.41127108 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.29926032, 44.59040891 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.28708884, 36.081519 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 761, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.01115755, 39.96995815 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 43, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.72157791, 39.92956518 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.09201039, 35.15634626 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.21917243, 33.17653242 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.91249563, 44.85627605 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.88023649, 36.99536167 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 75, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.9018212, 46.53351425 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.93859681, 36.6831435 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 199, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.39999394, 39.47296601 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.25974949, 39.20172582 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.4922454, 38.2977863 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.34884422, 43.67385583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.4399667, 38.47362326 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.4809943, 44.22800938 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.6296893, 43.04183996 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 146, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.6466953, 36.75733899 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.10804207, 28.86751206 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1240, "deaths": "41", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.46319413, 33.79216944 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.26252745, 41.0469907 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.41798804, 43.11363907 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.12571393, 41.60213491 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.11163677, 39.92913544 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.61915825, 30.57796289 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.68946704, 40.26186809 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6353295, 32.74055318 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.91703124, 36.66601852 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.22953869, 37.76430935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 120, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.1692571, 45.54486106 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.31647569, 38.82708533 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 272, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.90469073, 29.40167322 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 49, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.902708, 39.59921777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.78265517, 36.3791334 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.4418764, 37.85447192 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.14921604, 34.57692074 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.27355126, 39.52786077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.30811132, 34.70418038 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.50847147, 38.43947277 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 62, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.17477045, 35.29373559 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.69749701, 36.44667547 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.7577178, 38.99871131 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.17935342, 41.49952319 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.398376, 44.06482372 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 713, "deaths": "39", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.70589709, 43.02244215 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.19135193, 43.0022601 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.83572839, 31.09389027 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.40944419, 40.21097916 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.64436789, 30.86259065 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.33202141, 33.43443342 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.58054938, 38.30393723 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.93358327, 35.99438059 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.8132779, 33.80190085 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.79880657, 29.72856978 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.03992678, 35.20222469 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.70636931, 37.31234791 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.94676915, 30.31824095 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.45802506, 34.69316688 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.9934235, 48.70513576 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.18996211, 26.95635849 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.38774817, 43.98901072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.3938452, 39.59875897 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 340, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.13995546, 39.71581067 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.53524337, 37.40809042 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.53811412, 31.23279254 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.69377193, 46.40862701 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.42760647, 28.65696592 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.49424032, 29.45634206 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.90381514, 37.71714806 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.7234195, 44.40849741 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.8108306, 42.96927962 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.87296253, 34.50487351 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.3534743, 42.08798185 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.83020279, 40.51481965 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.4829321, 38.91588178 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.23418364, 30.87454847 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.88339847, 35.0167709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.82057197, 43.93779815 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.8882178, 32.93166885 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.51254721, 36.27469206 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.1178042, 40.10603347 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.5704487, 38.98103848 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.45450447, 47.92093639 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.29679772, 44.7975824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.55585247, 44.69565625 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.42320562, 34.29017991 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.65468702, 40.51587228 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.62415957, 38.64962758 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.56124347, 31.59882456 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.3827845, 32.73911281 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.6390013, 46.35821257 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.78638765, 36.796297 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.0068631, 44.49024544 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 94, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.4500749, 47.20753737 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.7063218, 42.8671731 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 83, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.65184241, 36.30337451 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.60505416, 43.29265605 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.65143315, 36.72292505 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.8129222, 35.40081878 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.7820567, 47.14003705 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.34248968, 37.46231118 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.67753461, 33.62744998 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.23215889, 36.65677234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.60243287, 42.6794956 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.45335881, 37.9463652 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.95684022, 32.85504247 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.55832668, 36.1173546 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.17139104, 33.5769205 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.96223202, 39.03630547 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.39658081, 42.03614551 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.63922281, 31.21444233 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 72, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.34230916, 37.2575872 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.12384884, 42.275797 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.67578087, 35.48544173 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.89032084, 39.69116283 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.22357106, 39.85746531 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.84691273, 36.17470125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.46525378, 38.29545894 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.2405279, 33.21498827 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.56351439, 36.67878901 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.9215658, 38.54332505 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 214, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.37295012, 34.89502264 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.23250453, 37.8774388 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.12715789, 34.15272415 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.5605612, 34.93535801 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.81591935, 32.47940482 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.80245083, 33.77036166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.98902499, 30.54579585 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.41905692, 41.28569601 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.78829551, 42.40183723 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.72142731, 35.38433717 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.94786822, 29.58165339 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.49248905, 40.05026529 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 122, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.78824948, 36.07959451 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.2427099, 29.93543004 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 98, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.0320729, 38.66611652 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.50111014, 41.68378965 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 565, "deaths": "15", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.02137802, 33.96044201 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.53094677, 34.63331566 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.63284988, 32.76039258 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.8268114, 34.07044901 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.6556109, 36.25669272 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.93512622, 36.76654925 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 228, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.81896936, 34.32207823 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 69, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.50218293, 40.87257079 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.26586179, 36.21990035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.94998918, 30.49673973 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 392, "deaths": "15", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.05244729, 40.07306535 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.70197703, 42.38382428 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.02099117, 40.87349452 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.49721957, 43.66146647 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 437, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.54502924, 39.19673558 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 95, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.16652245, 35.17670231 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.11083887, 31.70470573 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.18829593, 44.67385954 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1081, "deaths": "62", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.63235561, 42.13440424 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 164, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.65898478, 42.33997957 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.60826476, 39.32103553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.13845571, 32.77419582 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 53, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.35879121, 37.03513786 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.99766919, 33.2721566 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.16313899, 40.40423981 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.77566351, 39.82304555 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.73454884, 43.08178477 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.78280584, 37.83766422 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -68.38401854, 44.59816444 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.48851033, 30.41830223 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.66838948, 41.00250487 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.22375847, 36.52692871 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.57461608, 40.51943859 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.49464673, 37.7583355 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3545796, 36.27743284 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.21005667, 33.79602175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.80956574, 27.49293939 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.99161161, 35.20772017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.23654611, 42.38353877 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.96319251, 37.6976111 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.65929931, 40.66015414 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.18593755, 35.19732531 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.38931817, 30.33364686 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.85855301, 39.00683177 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 86, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.3077594, 39.55010644 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.87243571, 35.36731853 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.90538572, 32.73709786 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2341, "deaths": "31", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.39, 29.86 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.10948271, 38.19467379 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.81558439, 41.68330137 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.32869741, 38.44188174 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 88, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.12467576, 30.51359752 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.99222144, 40.35570088 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.36934071, 32.54935988 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.37919577, 39.2853852 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 36, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.87536254, 38.43542574 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.96567682, 34.34626973 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1045, "deaths": "48", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.73103891, 41.80283011 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.42747573, 38.04293782 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -155.5210167, 19.60121157 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.94885298, 36.44355426 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 75, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.02944344, 30.05669873 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.98196486, 35.55269063 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.28536625, 35.58332824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.12886832, 33.29686567 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.2703577, 35.83764858 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.66935133, 33.73325583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.57392021, 37.79344553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.4766782, 35.33788927 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.38600175, 35.65581134 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.85846587, 32.21128872 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 243, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.51037283, 39.76719009 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.16469006, 26.55386945 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 344, "deaths": "18", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.47694895, 45.00761521 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 291, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.39326555, 37.53460572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.24267944, 31.51148016 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 215, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.1481466, 33.4533428 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.13296166, 41.3533994 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.39625719, 39.93029017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.54436349, 40.98767962 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.11587507, 38.44942688 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.79293734, 38.38482826 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.06830637, 41.3339642 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.30121797, 36.33160906 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.87634026, 36.68542395 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.96145307, 43.42034246 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.42700204, 28.55364461 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.98104134, 36.3607755 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.47643507, 35.80609681 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 128, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.18299696, 26.39418217 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.60331456, 39.1839264 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.56124594, 38.35799465 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.34071957, 27.34254618 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.1129252, 48.62879827 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.13423143, 31.99045053 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 626, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.32013172, 27.9276559 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 288, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.7200253, 42.91537785 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 62, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.59312019, 41.88753639 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 178, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.44435448, 32.2656285 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.3004345, 37.82247444 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.3431676, 33.60771256 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.23651674, 35.01888303 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.81319222, 30.86747479 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.08923538, 33.12345854 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.92635677, 40.56163713 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 312, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -157.9712182, 21.45803166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.83242024, 32.42990927 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.6552036, 45.51872811 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.29754684, 37.29186313 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 36, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.54670406, 37.30939025 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.56351139, 33.14875072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 91, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.99555293, 33.9212828 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.95396325, 34.31709259 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.68495385, 46.89988536 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.29939599, 31.15197924 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 92, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.66879087, 32.45802497 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.49143057, 43.67129565 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.71878828, 36.28872054 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.9934871, 34.09007427 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.11351892, 40.48527731 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.31702714, 43.35671042 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 274, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.93126208, 39.25305293 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.69756691, 39.1435761 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.88683935, 36.77383887 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5437, "deaths": "122", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.07515667, 40.73766234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.9612585, 37.68473101 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.99661148, 44.39091534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 50, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.876044, 40.69923009 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.1109427, 41.40692186 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.52252707, 33.12825718 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.77992872, 36.03958805 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.08551032, 33.12351514 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 255, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.91284156, 40.56335249 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.97673273, 40.42162652 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.48822092, 40.82907273 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.04078453, 43.83353985 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.59867951, 41.14651175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.75536441, 43.33449012 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3546643, 35.84006574 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 97, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.75871777, 29.86803617 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 171, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.3499598, 30.25734305 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.4634436, 45.84721541 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 73, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.3669042, 33.0393082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.57001641, 35.74242707 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 63, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.60556721, 27.69308961 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.08963285, 40.65241041 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 205, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.37472069, 42.59716886 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.4111978, 36.51112084 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.07413319, 42.94502238 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.63484895, 44.35486835 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.0643373, 41.68630265 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.13469017, 43.00050278 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 57, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.8743128, 35.80950511 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.2897381, 37.8590362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.24295041, 46.26302338 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.82466784, 40.74717633 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.27501387, 31.60213036 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.84664923, 43.64060976 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.29487636, 45.56181234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 145, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.5216407, 48.14713305 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.70842863, 36.90579348 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.63092229, 47.51009045 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.3606733, 34.27993475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.90847954, 36.09604046 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.99750489, 34.78144169 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.21500423, 30.7954597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.56814788, 34.13794553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.38232563, 37.78595185 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.03851889, 38.9091582 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.57354837, 42.17178824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.79356799, 39.41673394 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.55692092, 32.30251776 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 126, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.42258681, 42.24807035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.15398258, 43.67423373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 111, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.64184064, 30.54020656 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 162, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.34724536, 39.01002188 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.14093385, 35.28814273 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.6181856, 39.01914254 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.41138784, 34.58781741 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.7289309, 42.43201126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.67239905, 36.36380466 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.57749563, 28.95472367 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.68148753, 38.84263974 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.80566792, 44.31864893 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 122, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.76950618, 37.31156958 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.68844964, 33.31535543 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.15437049, 39.01054275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.11553319, 41.02078733 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.05567785, 41.68576082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.11786866, 32.01922104 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.34050458, 37.20351921 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.02487495, 32.43171982 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.02667579, 30.74685667 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.00576229, 40.43781032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.6372487, 31.80405727 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 479, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.895063, 33.55554728 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 78, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.92619839, 34.26767081 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 610, "deaths": "23", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.2517692, 39.58635604 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.89442308, 30.43669112 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.41609057, 33.05867328 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.3131749, 43.82078483 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.9240025, 38.29980057 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.43633383, 38.78576239 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.94849466, 41.03192394 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.38289232, 39.2347941 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 319, "deaths": "22", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.65931031, 38.18664655 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4092, "deaths": "149", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.11115756, 29.74075478 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.03764977, 31.73397872 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 93, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.53870896, 38.25926778 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.094396, 46.14907081 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 40, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.94653457, 44.04200959 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.76259514, 40.38614126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.83182974, 34.11130184 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.9986361, 41.12913106 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.45148924, 36.04818632 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 78, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.16434171, 29.8832777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.5609704, 47.75003077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.86014147, 39.30776166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.77529134, 43.02054068 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.81210004, 30.26896765 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.96040187, 32.79248718 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.62710784, 38.99588883 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.2655033, 42.68891267 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.35393073, 39.08869046 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.58252003, 37.87119786 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.21820662, 39.78470589 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.0904705, 27.73103938 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.21094405, 42.36542373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.46036368, 35.56759135 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.66166794, 32.70211082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 230, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.10149107, 39.48994426 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 147, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.58754744, 41.67169354 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 244, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.82250877, 38.88548175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.8264322, 37.85106355 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.80691168, 38.74719601 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.26522753, 40.39257596 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.84886538, 36.4552395 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.36615819, 32.37877812 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.5845174, 44.04057166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.36622717, 35.51745004 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.56019163, 33.02512137 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.13139641, 42.12118609 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.168969, 31.62257767 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.35870791, 35.02254606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.87861576, 32.73997145 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.5561938, 42.3665549 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -134.200436, 58.45031811 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.11120239, 43.92456975 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.3997513, 40.53358749 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.53038622, 42.24542231 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.09085699, 44.68512729 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 69, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.52857054, 38.33860077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.00586446, 45.1526059 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 296, "deaths": "19", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.42861412, 41.93842729 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.8861752, 37.28507306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 145, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.86205334, 41.13746989 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 234, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.5786, 39.0997 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.85960149, 28.90705334 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -159.5966786, 22.03935037 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.28734728, 32.5991417 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.14421435, 36.81799745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.94877182, 40.50663314 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.64105766, 32.75462946 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -151.5388884, 60.24429722 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 79, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.42869583, 41.59081014 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.7113588, 29.94414155 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -69.76738544, 44.40759555 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 127, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.04051686, 42.57639354 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 201, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.56884914, 39.08646628 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.04741541, 39.24976208 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 207, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.54934642, 43.03197711 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 137, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.57641596, 41.67106337 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 36, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.53241199, 38.93950319 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.1785067, 41.33649833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 271, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.7277796, 35.34329425 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.34930144, 30.06040006 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 159, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.58763164, 34.33988254 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -130.975561, 55.57445008 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.61468386, 44.51727459 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.7148131, 41.19774275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3688, "deaths": "244", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.8346131, 47.49137892 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.15852768, 38.26818502 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.09384941, 37.70965316 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.88689628, 37.71044922 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.94193268, 35.94530008 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.8159973, 36.07409056 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.4913945, 44.36956169 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.97720696, 34.91671958 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6022199, 39.30497777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 119, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.6436061, 47.63479026 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.679439, 47.12521214 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.6496461, 42.68762984 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.69894948, 27.42435506 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.7913598, 45.87325839 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.2133034, 40.93148779 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.4194665, 38.68861576 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -69.10529169, 44.11486325 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.89178836, 42.63758421 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.42027563, 40.39830217 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 148, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.94635435, 35.99508821 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.7422906, 33.60519951 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.78352843, 48.24539665 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7020872, 47.67282258 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.86312322, 41.24521668 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.20691791, 43.20405458 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.11451093, 43.90632465 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.9810029, 33.72854224 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.8429014, 37.28632032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.42674232, 41.64232188 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.74072188, 41.54366008 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.88633881, 41.3442613 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.15907765, 31.67884782 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.29849679, 37.19113093 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.17488219, 44.9973857 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 266, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.60379201, 41.43564672 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.60677071, 33.24116713 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 285, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.06959876, 30.2049055 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.48490961, 34.35687874 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.78076396, 39.06986886 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.1317729, 42.66005229 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 355, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.40976986, 29.52470226 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.7536244, 39.10124298 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.3555697, 39.20278823 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 136, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.7125123, 28.76202069 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1041, "deaths": "23", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.00367925, 42.3224907 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 461, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.38277575, 41.41874274 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.0898013, 47.64514965 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.23676539, 41.69710807 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.12926365, 44.02193107 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.48921915, 36.3418017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.09668032, 33.77995024 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.14263877, 33.07841647 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.5077704, 31.20572971 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.57404777, 33.66981763 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.3516289, 34.06859623 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.64356694, 44.60353043 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.24206613, 31.19531316 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.68777155, 40.78416049 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 561, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.24770128, 40.03904563 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.70513032, 34.68270843 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.46400482, 37.71889653 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.847753, 43.93727035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.06472457, 31.0382857 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 64, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.22153148, 43.09052506 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.6887497, 41.3070252 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 167, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.4625784, 40.66671597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.70138352, 37.54567114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.0376458, 37.3153406 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7113698, 46.81587887 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.25215049, 34.87844729 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.65624729, 34.90171875 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 84, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.66229662, 32.40419769 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.6301591, 35.75893438 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.11321779, 37.10975748 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.92221316, 32.46325233 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.00490796, 34.48244419 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.93186692, 29.38508402 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.31069453, 34.52041498 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.10867198, 36.04188196 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.72884035, 38.71987914 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 55, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.48361629, 38.84112637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.72882223, 38.07136018 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.10841127, 31.55147224 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.53466552, 38.59743452 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.33393706, 40.99206278 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.7929428, 44.35919441 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.39787695, 35.21675201 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.70392124, 34.89851864 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.72844721, 44.37136597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.4123733, 32.79215361 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.52402044, 32.7536828 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 59, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.03620809, 39.20183497 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 169, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.45651841, 40.36680311 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 148, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.35132246, 32.60154883 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.78383866, 34.78498904 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 462, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.88399313, 26.58410348 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 208, "deaths": "15", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.14324253, 31.7793306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.29977132, 41.74583951 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.48183025, 40.64181461 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 40, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.68149954, 34.2918775 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.17569362, 35.47623147 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.25690731, 34.16393091 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.97045773, 30.31120597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.12606515, 36.70586667 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.80150326, 44.94430054 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.29900733, 33.55545125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1319, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.59435245, 40.6154815 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 36, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.06603727, 41.89475156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.64245615, 35.2403259 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 71, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.27491114, 30.45955727 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.9936328, 31.29872538 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.37999606, 37.09246661 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.74007147, 29.31829741 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.434146, 46.23315327 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.37735618, 38.53184419 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.44903992, 43.7844157 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.49022694, 35.52853208 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.3925769, 46.57756476 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.49988181, 38.9947249 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.394698, 47.12610041 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 130, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.27146426, 33.89665987 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.44262866, 37.78258621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.49251135, 31.82588896 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.024307, 48.56084317 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.81205615, 30.15152688 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 64, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.48185785, 40.09136236 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.98310072, 34.81185586 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.58095444, 31.5454767 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.74002806, 33.95317155 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.5136649, 38.98749519 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.45024131, 33.79201475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.1358773, 43.0012336 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.6659741, 32.6003154 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -69.54227124, 44.05996956 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.26688165, 44.41311883 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.45391915, 31.53288662 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.95588181, 39.05345619 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.4046155, 48.54265777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.7475374, 41.04658298 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.4586166, 33.74526079 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.21740317, 35.48508185 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.8812462, 35.70270942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.869912, 44.64252874 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.7203905, 43.27841182 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.58910106, 35.13738622 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.4194388, 47.57705241 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.6563997, 42.26376367 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 197, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.59809485, 42.07923082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.84254089, 38.21267844 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.10704106, 39.87001769 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.5373154, 44.48899494 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 255, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.2451475, 41.7937534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.1246786, 28.35101362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.55784752, 40.89188292 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.73061664, 30.44143993 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 174, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.91297209, 42.60302282 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.54645978, 39.78110272 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.77966158, 42.72596275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.68475262, 30.70645047 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.71951016, 35.21413234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.110817, 40.7249637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.36638784, 40.12581572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.877635, 36.85949479 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.4817851, 41.56650314 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.76784341, 40.38996525 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.44352845, 35.91899576 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.93528571, 37.8299889 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.74952375, 31.75218791 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.88742357, 34.75392199 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 136, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.15083537, 41.29553751 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.3134985, 35.86631386 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7559, "deaths": "198", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.2282411, 34.30828379 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.31145275, 35.73939663 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 238, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.63481877, 39.08990083 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.26102611, 41.21842119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.96274807, 37.97850256 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.23906784, 33.95273467 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.65158371, 32.1597283 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 49, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.27056716, 30.83568832 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.4419153, 33.47386518 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 191, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.8204789, 33.61008596 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 371, "deaths": "16", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.65468618, 41.62101218 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.54471223, 46.47227431 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.00425681, 34.57286511 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.24133319, 36.94618528 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1134, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.98447579, 41.17823008 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.06629984, 41.34310539 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.85201878, 43.89522709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.19888138, 37.40021399 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.8162849, 33.17657705 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.20926845, 43.38107862 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.15275715, 38.45576156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.07886257, 37.02080035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.83806103, 44.41327865 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.1870479, 39.01777974 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.04980537, 46.07028979 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2626, "deaths": "141", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.92752801, 42.69158356 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.69267724, 32.38759944 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.04234127, 32.35207048 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.96342505, 39.86064913 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.56453089, 39.83049768 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.41696617, 35.14867843 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.00778595, 36.53157855 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.92424028, 39.26119767 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.7665589, 37.21513971 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 153, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.55069633, 34.76327133 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.47398594, 30.44396917 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.21218732, 34.12920917 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.6538474, 43.78141028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 82, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.90422563, 38.83042506 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 143, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.71964711, 40.16143691 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.01554631, 41.33081904 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.27220275, 37.71659336 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.23973355, 32.36918118 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 83, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.03513564, 32.63389156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.3467143, 37.47865134 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.9173017, 45.30080065 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.6005481, 41.91676024 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 92, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.67266639, 42.91653905 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.40178317, 39.89381073 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 43, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.84076036, 35.61181957 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.28220331, 38.41531222 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.64083907, 41.33521503 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.80921485, 47.32557075 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 305, "deaths": "28", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.77287029, 41.01631101 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.53467076, 36.31149996 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.6227395, 43.1937027 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.48509905, 38.7464321 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.44399307, 38.77058531 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 171, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.31831044, 27.47196942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.05626916, 44.33352407 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.80928853, 44.11946801 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.75863384, 44.89792533 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.78796182, 32.24767634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1559, "deaths": "37", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.4918154, 33.34835867 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.92249662, 38.16193985 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 148, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.7210631, 38.07122463 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.033246, 45.38553432 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.88704173, 34.13697363 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 65, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.05803627, 29.21227113 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.52733571, 32.3483402 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.91899208, 38.64963204 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2290, "deaths": "58", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.13826325, 39.78163624 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.09934783, 41.33445101 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.0985251, 38.35855394 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.26898542, 37.55218078 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.8209217, 31.23132643 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.15736305, 40.58610662 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 215, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.5815117, 44.90287942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.36400756, 34.07859748 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.62265895, 35.12997174 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.24244659, 39.50984542 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.67561152, 34.59905577 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.64043701, 46.4338914 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.40073763, 43.81911946 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.30486727, 34.36975964 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.34510444, 41.0327901 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.26185087, 41.32467367 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.9990819, 42.03586837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.32803576, 36.8800707 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.50299462, 34.76216286 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.76855464, 34.02311222 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.59855639, 45.75870838 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.76420988, 35.45798777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.66591062, 39.86064362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 101, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.43109784, 27.0772071 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.80373186, 38.7099921 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.51247478, 37.79990579 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.55099908, 43.67429718 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.10860251, 35.84326734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.9513518, 32.30600051 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.86352771, 36.68212094 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.91824452, 40.23917274 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.82151043, 38.59471935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.24988902, 43.99509218 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.22629416, 30.71780434 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.1863685, 47.35007586 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.02524219, 38.77071799 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.71036614, 37.22078441 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.01230294, 28.81955746 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -149.5741743, 62.31305045 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.34098896, 37.44164146 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -156.5689097, 20.86399628 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.07462444, 35.6187413 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.3157686, 28.7429195 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.23175116, 36.30179091 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.44572302, 35.01123903 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.36863144, 43.6742571 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.30794338, 33.90161443 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.70445755, 37.05350953 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.48102924, 36.73874143 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.34682807, 31.1925468 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.77222373, 34.11664328 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.34867205, 36.62869595 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.0482425, 35.67736232 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.65083669, 37.38002939 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.48252774, 33.47851918 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 180, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.45248227, 42.32451172 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.6324822, 48.23104458 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.44145858, 46.11182017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.66599306, 35.37235506 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.56478358, 41.80938602 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.395905, 47.7413337 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 87, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.2378, 35.7152 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 65, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.84621113, 40.48996987 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.26803443, 37.5301951 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3182418, 47.60766714 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 62, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.20217694, 31.55255453 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.27287017, 44.82367677 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.61520715, 35.42812616 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.5647812, 35.17468549 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.64769869, 38.39184858 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.21028219, 37.96163597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.7162741, 44.56676791 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.8898557, 46.59907074 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 848, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.8317671, 35.24469268 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.36131056, 36.67882005 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.32463223, 43.64064262 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 94, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.8998621, 41.11770589 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.11030298, 29.3557301 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.52839455, 45.12328869 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.0305041, 39.09224872 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.81482914, 35.51558739 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.80246001, 40.02742725 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.3911313, 39.4381191 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.59985712, 37.94090733 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.70950714, 45.00422544 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.7209035, 37.18922369 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.74290052, 41.20596782 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.87488475, 37.81474237 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 992, "deaths": "28", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.70479631, 40.28047017 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.8318399, 47.31213126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.62912742, 40.54043046 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.25816981, 41.30248872 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.11023142, 37.40481169 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.68859732, 33.04163534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.0374887, 41.16624273 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.6811573, 43.29662971 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.469799, 39.01787888 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.04525048, 40.76940965 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.83832189, 38.56383358 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 107, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.22871271, 40.0543329 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5354, "deaths": "49", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.55170587, 25.6112362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 150, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.53714864, 41.45949668 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3545, "deaths": "80", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.39049229, 42.48607732 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4156, "deaths": "139", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.41426991, 40.43629879 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.55064617, 37.63191998 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.38804374, 43.64330771 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.0315682, 31.86904128 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.61070738, 40.61116939 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.97718698, 30.7858183 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.89285258, 33.31403423 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.73151117, 31.16568912 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.61920963, 41.03299766 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1416, "deaths": "56", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.96733172, 43.00486062 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.9281698, 37.66954283 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.94104895, 39.41561583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.6357257, 42.85518524 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 228, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.7910885, 43.67441641 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.09256478, 44.33772443 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.0519437, 35.76271485 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.9213508, 47.03728583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "11", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.19381821, 31.22483255 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.78887719, 43.35638371 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.20906732, 39.39331582 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.1582442, 36.01059309 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.9212058, 32.30623474 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 249, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.20842409, 30.78472347 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.2070876, 40.61810999 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.7577902, 35.70471703 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.57976951, 38.63571781 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3038, "deaths": "86", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.22240686, 40.26549699 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.8872409, 37.93899289 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.95743843, 42.05220391 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 68, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.04766838, 39.63218457 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.36995001, 31.56729412 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.20540287, 34.6815935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.07812416, 25.20904673 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.92097166, 33.014289 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.17761038, 38.27594376 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 60, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.52414358, 39.16130004 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 152, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.53749864, 41.92734151 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.4808438, 33.89236763 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 651, "deaths": "34", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.69322942, 43.14638895 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.08464734, 39.72984936 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 671, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.34031025, 41.05934058 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.24902965, 35.44550387 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.618819, 43.94641218 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.72500958, 33.67521893 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.15252824, 43.31082541 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 64, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.2413397, 36.21862405 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.5958857, 37.33859579 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.20969272, 32.2206831 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.47809254, 39.23198845 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.89335024, 40.04034823 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.15642896, 41.03018714 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.74329258, 37.19236568 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.9145241, 38.03253032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1088, "deaths": "26", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.20358245, 39.13676329 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.61729103, 33.49419589 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.47000721, 38.94022054 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.44011632, 42.90123494 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.90416657, 35.33155144 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 147, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.29050975, 39.75394919 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1521, "deaths": "37", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.36652296, 40.21053671 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 72, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.38550661, 36.49609412 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 210, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.50572772, 30.30079133 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.37868691, 37.17746986 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.66345939, 41.03023987 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.2639022, 38.40214114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.48474178, 35.30885257 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.36230578, 35.27724699 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.8930281, 35.83769242 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.80421614, 32.81686191 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.85475946, 34.45500589 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.8093302, 40.2627981 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.49129491, 33.59232073 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.20255104, 39.71654544 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 82, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.44573375, 39.47899078 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.88791859, 38.4181765 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.85308173, 39.62081738 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.64880098, 36.13248031 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.26311676, 39.55439028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.65128437, 38.68827511 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2468, "deaths": "102", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.5455371, 40.86095313 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.73255695, 33.11304005 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.7892599, 40.5236356 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.584546, 45.41846568 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.7992519, 37.19141121 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.2822377, 46.71681782 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.62099969, 39.64187451 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.3555315, 48.20197971 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.75234549, 43.67142874 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.14632053, 37.21425819 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 258, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.4169351, 45.54747959 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.74993177, 34.78897608 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.76328482, 44.02216709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 61, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.1121697, 41.48370744 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 57, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.87142262, 32.50931999 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.15176712, 43.29123859 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.94363275, 39.96575964 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.37802952, 35.61318461 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.39498, 46.49684637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.61803994, 31.62017125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.332839, 38.50735751 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.98422508, 35.96575634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.80297522, 30.61037141 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18548, "deaths": "500", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.58941873, 40.74066522 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.09816516, 31.72321584 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.797885, 42.96180148 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 404, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.1403, 35.402 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.47428766, 32.04620681 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.4657193, 37.80335779 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.88498513, 37.78790447 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.85433992, 40.38514847 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.30670046, 37.55862897 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.11726492, 32.75339664 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.30632432, 33.66340119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.7627281, 39.30394768 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 636, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.64054974, 39.57992638 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 53, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.87075626, 34.25758282 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1664, "deaths": "60", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.93620426, 41.4080325 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.99828634, 37.50694406 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 85, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.10430976, 41.48896435 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.66070007, 36.59666326 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 81803, "deaths": "4571", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.97152637, 40.7672726 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.80070107, 43.554374 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.59935761, 34.28629098 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.26569799, 41.5642026 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 60, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.51754109, 37.08166899 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.21612969, 35.91947491 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.8454714, 33.55514538 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.39635768, 40.95610449 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.11843336, 32.40021118 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.3394104, 36.90519407 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.74408813, 30.78548982 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7500975, 46.32638236 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 155, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.74777412, 43.19898042 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.01889177, 38.33342292 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.79759588, 38.29617706 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.24710352, 44.35291112 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.41966713, 41.39672484 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.22928674, 36.38953329 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.88133008, 40.36079813 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1778, "deaths": "41", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.20530408, 42.16073095 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.26420872, 36.89934014 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 54, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.39769443, 36.41736238 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 857, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.30471829, 40.75182733 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.87751591, 37.34062933 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.70798222, 40.84785433 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.41949732, 37.89202088 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.62750411, 36.93357076 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.05065922, 37.1435975 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.61902331, 36.79843529 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.56949061, 33.11009499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 65, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.5433285, 27.736286 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.4722702, 38.04264256 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.62474482, 43.08310673 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4007, "deaths": "234", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.38595416, 42.66090111 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.14921589, 36.35732446 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2856, "deaths": "101", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.28089251, 39.8895449 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.26726673, 43.64124435 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.43679568, 33.83749973 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.06742317, 34.75225169 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.26807503, 45.02715345 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.12725175, 44.33481032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.5555498, 43.33749164 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.32184679, 42.04165196 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.08278123, 33.8786296 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.96515993, 38.955305 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.85368087, 37.47751843 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.62203992, 40.0955451 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 78, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.59267105, 30.69143028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.7387224, 48.54855019 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.88944347, 27.3863362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 317, "deaths": "15", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.40716948, 35.55140095 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.96432828, 35.64661916 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.87905132, 33.42491685 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.448222, 38.39791089 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6027606, 35.40425596 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3406158, 47.11530482 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.40209944, 44.00374114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 125, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.43710392, 43.24375382 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.51944105, 45.70677897 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 422, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.19971155, 43.00491923 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.42908179, 34.72607366 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.30874425, 42.85145728 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.31390481, 46.6652262 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1016, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.7645998, 33.70147516 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 803, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.31799498, 28.51367621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.49523093, 38.5411892 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4075, "deaths": "107", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.30240757, 41.40337468 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 81, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.12167935, 36.06092947 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.89412775, 30.11879481 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.37640104, 44.00470222 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.015604, 38.24530219 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.79886287, 33.4391073 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.4033755, 36.68710164 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5070, "deaths": "208", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.92660315, 30.06971951 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.2320066, 43.2516977 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.24562697, 44.82964024 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.72707998, 38.65235984 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.8613635, 38.46036182 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.39635704, 36.62888819 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.76753828, 39.3503437 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 272, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.14882926, 28.06312234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.32566756, 43.98992088 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.12939244, 44.68192279 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.14635194, 43.42778894 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.7173385, 37.9014485 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.7417604, 32.61348406 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.13374142, 40.64843556 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.59898295, 45.02085831 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.03151402, 42.63492579 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.65020313, 39.13237408 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 55, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.9969107, 42.95996803 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.0940185, 41.53781826 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.81011909, 36.83532655 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.70835255, 46.40846929 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.87795984, 33.58839816 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 275, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.15704172, 32.47645559 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.7675136, 38.14717457 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.46565023, 44.41578887 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.28989535, 36.34117832 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.83900724, 39.31145587 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.1693871, 42.58016894 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.75682123, 44.49952995 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 70, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.94625009, 43.38352225 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.1497813, 40.7393172 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.48797204, 38.61807452 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1206, "deaths": "69", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.46536002, 26.64676272 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.31319001, 32.75310985 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.66559823, 35.15253315 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.95064249, 34.36398677 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.30552481, 32.1639596 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.7182065, 39.120926 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.5264394, 45.48965095 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.5852825, 44.52157546 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.20375833, 39.77202286 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.80500621, 32.77757172 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 125, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.40227529, 28.30810945 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.25134778, 36.26723798 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4372, "deaths": "71", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.29954144, 41.03238628 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.2865648, 36.6801638 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 66, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.86848792, 33.91969522 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.5801017, 41.11676341 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.7033176, 36.31743373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7647695, 44.00545243 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.97584944, 36.07695283 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.82937, 32.56934316 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 60, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.58677275, 30.77090935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.7241261, 30.78097267 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.78742322, 36.2130572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.2741804, 48.53234021 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.90352133, 34.52265624 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.35599463, 38.69607718 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.35084086, 38.68314479 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.8240777, 44.0025835 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -68.65020455, 45.40194593 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.76078901, 40.78702156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.99949611, 44.58307413 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.40603143, 36.17847453 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.29770589, 32.64048341 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.94372564, 34.9459153 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.22922731, 37.25023553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.99281835, 31.17161885 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.82741088, 37.70660776 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.23804971, 39.73508655 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.26297447, 40.40206612 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.86139634, 35.63708728 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.97217358, 36.38989032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -132.9540995, 57.13978948 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.39368102, 37.20530399 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.28471706, 38.72798918 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.79351727, 37.87736118 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.41461667, 40.51156033 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4777, "deaths": "87", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.1379271, 40.00338507 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.84800154, 34.43268455 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.3577703, 40.59414277 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.59319339, 40.01360584 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.0243386, 39.64170392 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.08818103, 33.28094866 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.46406611, 34.46589159 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.72791551, 34.88807695 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 36, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.21598442, 31.35928155 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.96407787, 48.24977025 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 795, "deaths": "16", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.1405958, 47.03892768 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.4224416, 44.71850291 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.9408295, 31.80396383 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.65789349, 34.16250414 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.38790389, 33.09310242 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.8877017, 39.62265059 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.39487445, 37.47088263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.40392572, 31.17507789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.16980779, 39.34310674 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.06769584, 39.07634001 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 148, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.03208106, 41.33155042 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 464, "deaths": "16", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.7890033, 32.0971334 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 124, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.3449483, 32.90525627 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 394, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.72239666, 27.93130349 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.25841142, 44.02301619 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.9310027, 39.21720112 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.37353178, 35.59535426 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.7513432, 34.92065823 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.39731264, 36.81980341 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 117, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.7240569, 39.06167234 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 123, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.60322085, 29.42245447 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.77068479, 39.38154439 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.52144359, 41.57246836 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.966331, 42.13299116 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.16771771, 39.37091679 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.8395236, 40.00355989 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.21366621, 42.737633 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1327, "deaths": "33", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.80802823, 41.94070556 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.66268713, 35.57433534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.60209535, 30.71409502 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.22728802, 34.48254879 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 206, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.69732947, 27.95027105 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.18677781, 34.00267074 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 134, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.57767461, 41.68679484 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.40134647, 47.77372465 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.39828174, 37.6162296 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.16812354, 35.27820615 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.4128888, 44.90322804 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.52075859, 35.12245443 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.8276624, 30.79472531 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.03636807, 34.226046 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.68337199, 34.72959848 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.03212219, 35.44871474 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.35798148, 37.14259351 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.19735782, 41.16793482 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.50152965, 44.47558711 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 85, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.06848888, 41.45986947 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.35971629, 36.85914825 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.86480429, 38.02097333 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.34564657, 39.37925655 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.94923008, 35.20614018 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.53907776, 41.33640314 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.89559864, 41.74471626 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.893964, 35.40133773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.82553961, 37.83218794 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.8395742, 42.69254894 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.53155731, 41.68625425 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.91267882, 37.55016038 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.55162157, 34.83624419 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.73922153, 37.64780729 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.64787018, 39.7420247 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.51986294, 34.61810501 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.91498656, 45.34018577 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.66712803, 39.46770987 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.43597949, 37.22554789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.22922187, 37.18497668 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1310, "deaths": "32", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.8496441, 38.83070039 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 263, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.48713689, 38.70916224 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 832, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.57753536, 41.87064746 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.5127437, 38.17359144 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 179, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.31355101, 34.77054088 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.4754996, 32.23334561 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.69890683, 41.04166107 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.57629079, 37.10466131 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.20783203, 37.82462075 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.71229738, 37.06474963 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.74230285, 29.60779729 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.37552891, 33.32056115 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.84517605, 39.66437981 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 427, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.74965532, 41.42630093 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.1336111, 41.02094889 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 81, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.50646123, 36.14005459 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.9082131, 38.50782345 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.03530977, 39.06198912 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.01773177, 31.86728114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.28908, 34.25157572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.40304637, 34.88389445 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 66, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.05941254, 42.74753117 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.5602732, 37.12222899 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.2456041, 37.76936795 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.51838643, 39.52817427 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 112, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.09872295, 45.01625271 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.72223879, 48.26886249 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 40, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.8971322, 34.96585996 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.45708831, 33.29526734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.02455531, 36.3415714 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 82, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.75732369, 31.76622818 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.82512254, 38.05095369 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.01139319, 40.15734772 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.4971374, 39.44007257 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.80570339, 35.71015088 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.87919615, 38.769899 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 79, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.94537876, 32.26469147 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 135, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.52997303, 31.19778499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.15826963, 38.68295619 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.1189164, 46.08520862 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.98905745, 39.3537468 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.34213308, 32.09530039 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.25207021, 44.40555844 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.6903896, 31.32323325 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.08607292, 37.95230263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 88, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.51089874, 42.71348136 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.94553734, 44.72836381 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.65036709, 39.82799632 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.97009925, 37.36085952 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.93076643, 35.60536161 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.29658715, 44.3543376 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.08475366, 38.71240969 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.76634876, 32.41391005 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.5610786, 47.78668011 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.5379961, 40.77180308 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 340, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.90267209, 34.01791263 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.43012729, 43.3762778 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.07026432, 33.35777107 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.74491009, 35.00417719 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.72920628, 37.937575 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 119, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.47966921, 37.53255773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.73420026, 39.28935726 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.6931674, 36.51072137 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.2179009, 39.97913541 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.3847838, 37.5836865 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.26212744, 39.10235626 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.85990261, 36.65460667 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1179, "deaths": "32", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.9933578, 33.74314981 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.52458689, 35.84923189 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.35243568, 38.71622686 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.06396753, 37.26865804 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.96189766, 37.27791025 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.94672673, 45.62975048 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.87346725, 36.52454807 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.51272246, 31.02539637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.1025053, 34.64244496 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.071479, 42.67151616 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.57042164, 41.46613806 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.44605905, 37.81204314 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.31176452, 37.36642393 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 86, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.02202167, 33.65145002 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 255, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.12883377, 42.98499744 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.77504841, 36.39593137 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.87260325, 38.51006137 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6413, "deaths": "154", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.02560498, 41.15027894 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.40771592, 32.89779518 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.60406759, 36.37004357 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.84097493, 48.77245354 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.32484567, 39.35022773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.0079268, 48.29607488 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.4799493, 34.02097406 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.61067651, 44.33473082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.81079919, 48.77501878 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.06000914, 39.33705391 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.9905548, 40.48596505 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 64, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.52446628, 35.64003916 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.4655599, 39.62002287 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.76176432, 32.10773545 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.1333012, 45.47498854 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.18415324, 32.28725256 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.06070117, 36.99308373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.10095486, 36.9302832 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.92112099, 35.40114178 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 193, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.4107263, 35.84591405 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.03741676, 43.57723578 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.55433981, 31.56388699 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 580, "deaths": "22", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.3425374, 38.45106826 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -69.85074999, 43.95415864 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 186, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.0513121, 43.33433923 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.282466, 38.08054629 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 36, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.3469663, 39.58719656 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.06219455, 37.2836193 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.67583224, 34.64916145 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.54119706, 37.75332999 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.65185177, 38.78369175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.20259964, 39.13734288 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 858, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.9216011, 40.66616532 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.72713237, 34.00795823 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.36914061, 34.98820368 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.17000399, 31.39457611 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.069975, 36.60308176 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 547, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.1774685, 34.84060306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1454, "deaths": "31", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7365326, 33.03484597 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 676, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.4385672, 37.75215114 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.16260304, 30.57933681 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 223, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.2730061, 37.93433732 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 173, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.2378, 36.3882 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.8033714, 37.62762978 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.96745, 48.60182783 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.4039028, 35.38822029 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 617, "deaths": "21", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.3275546, 37.4228808 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.4020725, 38.00450883 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.8163562, 35.48014807 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.51763891, 28.00880118 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 128, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.8687803, 35.68862401 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.137872, 41.35624126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.65872023, 39.75836914 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.82055898, 43.42406072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 218, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.0188492, 34.65329488 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1380, "deaths": "46", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.6970462, 37.23104908 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.8479088, 31.52508998 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.0066524, 37.05580291 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 66, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.9774716, 35.50708973 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 69, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.02458128, 30.6934145 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 180, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.33174248, 27.18546175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 162, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.86653895, 43.10904162 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.11156432, 41.11314181 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.94966132, 43.42574087 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.63773905, 41.2278103 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 149, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.05278291, 42.81668777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.31258912, 32.2654021 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.4433903, 42.58831742 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.19972234, 46.19235734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.8773299, 42.39184015 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 136, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.2150785, 40.70497338 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.98907345, 38.80270163 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.14709064, 40.45214695 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.4757978, 34.8386299 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.0632176, 34.85588887 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.74627859, 38.68672078 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.61959493, 41.63935978 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.9066539, 38.48222076 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.5816631, 38.29622293 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.53340251, 44.6490231 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.53789439, 32.4067041 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.56474493, 37.05588075 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.50360494, 36.42325673 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.60171704, 36.71466456 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.7080986, 41.85070896 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.60779441, 32.74976524 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.69936482, 35.9109364 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.27162713, 35.19605503 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 154, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.4608198, 37.6842718 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 216, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.24060348, 28.7158582 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.86823924, 30.93464824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.61686741, 35.16478725 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.82497064, 42.78081007 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.12783209, 41.12351311 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.41022136, 35.36979721 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.75463785, 35.49447108 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.2424869, 33.99780401 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.52244332, 35.78077323 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.8507201, 37.19324632 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.139673, 40.87241834 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.8159538, 32.88149103 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.47819342, 36.16258158 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.0396884, 40.76391419 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.76443896, 44.78902246 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 50, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.7557264, 39.04100763 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.94579284, 43.72099677 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 159, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.66232561, 33.26879845 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.80611122, 39.39133527 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.7915857, 39.52305623 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.31015553, 41.6850066 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.194223, 38.21476019 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.07634971, 39.79742518 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.20258189, 40.33163494 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 912, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.89692423, 35.1864775 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.14550696, 31.79211404 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.56813762, 38.85905135 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.77617511, 45.44447208 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.8862389, 44.79048913 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.6827834, 45.41501554 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.14585902, 42.953928 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.23164924, 44.5796592 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.6620092, 45.90018933 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.58047435, 36.74058474 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.91716179, 31.91282117 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.1767568, 43.08221074 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.0440149, 46.11323337 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.5407434, 41.59198861 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 169, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.766131, 48.48171488 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.9164403, 46.02408726 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.4601547, 46.44737738 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.50644846, 32.01744532 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.95411046, 36.25359775 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 79, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.2717568, 32.37474036 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.53344948, 36.84455636 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1695, "deaths": "63", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.7170703, 48.04615983 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.06840691, 40.77129231 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.9298354, 34.00715494 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.9357113, 38.26827353 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -69.95995554, 45.51229767 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.75118623, 38.1163542 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1160, "deaths": "46", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.61683016, 40.56465737 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.02699593, 39.97172723 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 120, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.8862506, 38.52746429 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.10642712, 36.72231125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -143.2127643, 63.87692095 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.28013991, 33.26310031 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 120, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.99225984, 34.92960077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.0079644, 38.01519732 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.32749335, 38.03223971 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.34626602, 44.93837606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 239, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.4046494, 47.62113146 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.655399, 38.18574462 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 304, "deaths": "10", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.51887093, 29.87761636 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 328, "deaths": "19", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.35555967, 29.90709658 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 271, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.66662425, 38.77875681 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.31029372, 33.71902176 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 127, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.93063427, 38.46996033 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 140, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.67937954, 42.92655373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.45000068, 45.03437474 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.74828138, 35.02201976 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.47598685, 37.81214171 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.71013176, 30.82210324 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 181, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.80212061, 30.02531716 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 432, "deaths": "35", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.4753503, 30.12597499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 154, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.43589967, 29.90096506 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 142, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.29040834, 41.61756781 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.52797979, 41.91441767 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 86, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.00135806, 30.59724262 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 78, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.06550039, 44.4976179 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.46879855, 47.6048407 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1203, "deaths": "24", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.4458375, 38.6377004 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 476, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.24349225, 38.63555736 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 130, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.47106649, 27.37763908 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 112, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.61403569, 30.13112107 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 81, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.44702164, 29.69262097 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 62, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.6062928, 38.30058422 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 733, "deaths": "18", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.95642711, 30.40942847 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.71762001, 38.03100851 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.45917053, 38.41758738 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 90, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.9970722, 37.55862499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.25093221, 35.31647813 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.19394708, 41.9169835 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.79745866, 41.09309773 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.6576326, 46.80851182 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 114, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.36437305, 40.81482476 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.64686895, 41.27890281 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.73892358, 26.56150059 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.05979937, 38.15965544 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.1949941, 37.89090059 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.61078221, 45.55192576 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.22627088, 44.02240351 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.29405315, 34.55151201 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.85141892, 34.48556989 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.662598, 42.35129217 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.00101094, 41.64423868 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 87, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.3829924, 42.2689144 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.3118967, 37.1923008 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.8542701, 48.40035475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.83208037, 32.07996777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.83920548, 36.50235092 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.9444155, 36.85571651 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.23893369, 36.4017975 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.15684085, 35.86251946 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.11547539, 30.79187949 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.45256475, 36.75000327 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.46499005, 42.03621213 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.02336013, 43.291833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.95637318, 46.97962541 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.9130922, 42.76558279 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3600, "deaths": "48", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.07850442, 42.3279514 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17008, "deaths": "323", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.8012172, 40.88320119 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.63603554, 36.70155394 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.41414469, 39.08952258 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.22203125, 43.36094111 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 296, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.76394559, 41.71579493 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.51246591, 41.44634738 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.30412917, 36.51240691 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.1150762, 39.63803232 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 211, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.53123079, 41.12464734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 273, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.9535882, 40.86688146 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.47721621, 37.23682549 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 376, "deaths": "18", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.45917204, 36.46824103 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.19916205, 32.59117397 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 90, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.0794267, 28.70181754 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 168, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.19821492, 32.03650571 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 105, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.37942316, 33.91826534 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.58882684, 33.60192578 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.69102283, 36.41689489 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.88450012, 37.11781893 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.80071959, 41.82147784 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 279, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.39031349, 38.66143781 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 357, "deaths": "21", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.69118243, 41.13891592 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.25791182, 36.92432914 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.6945899, 39.03417539 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.9909967, 30.19746066 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.48748932, 35.48665845 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.8827882, 41.65943896 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.68264092, 45.2829032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.7349174, 34.53028891 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.03022429, 38.82767338 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.53351366, 32.69642758 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.10882561, 38.76618159 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.16886178, 33.37823223 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.1729398, 33.95339918 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.79833053, 32.86698258 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.53266945, 42.07991767 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.04075153, 36.65465345 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 269, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.40664996, 30.62888673 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.6310198, 36.58006022 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 588, "deaths": "19", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.29101614, 32.77143818 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.94485778, 34.65133709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.05539188, 32.04785085 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.60445406, 30.04848048 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.25077141, 32.55792548 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.69778563, 40.73710579 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.3329931, 37.3677562 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.89007449, 32.30163422 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.0421439, 39.33602617 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.51404662, 40.50716185 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.56685568, 37.12191123 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.2370171, 40.12570935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.93491155, 31.92829517 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.1614893, 38.88133511 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 209, "deaths": "14", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.82626855, 29.37343766 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 93, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.44069698, 31.77527543 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.3354521, 33.17402785 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.2056773, 43.75303583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 44, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.5890801, 43.93522482 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.96564727, 37.31728859 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.4889765, 36.74777635 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 43, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.91847289, 30.86392347 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 74, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -122.8290656, 46.9291895 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.5236119, 31.45743864 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.712066, 45.46248721 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.92426619, 34.37288446 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.30835812, 42.16852837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.25433032, 41.77255149 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.90988194, 34.76872156 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.89413959, 40.38872739 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.05234925, 40.31123252 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.73694895, 35.501942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.23917219, 34.74023475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.96797273, 33.21339719 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.7195503, 43.19338568 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 111, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.3308481, 41.85853803 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -100.462443, 31.40464436 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 105, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.47229843, 42.44945765 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.1295715, 40.44862644 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.6942414, 48.65577551 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.32957247, 32.12059861 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -105.8508949, 34.64048375 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.7410746, 34.91369188 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.79638423, 35.20383864 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.47062949, 45.77298854 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 554, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.7853562, 30.33432034 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.35893614, 44.30360275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.56904553, 32.40422134 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.1367187, 31.0879489 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.02812115, 33.03349196 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.16087954, 36.39026213 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 126, "deaths": "8", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.76109643, 41.31735028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.57053576, 39.11240885 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 157, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.8020203, 36.22026558 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 293, "deaths": "16", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.94013939, 36.11939621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.37481167, 34.64967704 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.9525093, 38.02644018 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.62069378, 31.71612656 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.14865776, 43.3109081 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 83, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.52556818, 33.28726072 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.47226262, 40.44214695 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.41897025, 43.46606813 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.43078662, 32.67435595 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 53, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.6685381, 42.35440512 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.37690895, 30.77031716 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.88772676, 39.46811972 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -110.5475782, 41.2878183 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -109.5174415, 40.12491499 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 462, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.26252104, 41.89027881 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.7353826, 45.59073056 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.43709629, 36.10890856 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.59746952, 33.16887091 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.37497443, 30.04412971 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.98967069, 34.82995757 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.92497066, 39.62550777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.94300009, 37.66166713 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 35, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.3749373, 32.83121059 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.00776006, 34.49162015 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4831, "deaths": "125", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.30680092, 40.65835409 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 87, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.52955873, 34.98960527 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.37239023, 40.30016061 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.0068979, 45.30915495 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.05996014, 40.96188846 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.61730349, 34.68835752 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.6557828, 42.83112163 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.83651902, 36.28590426 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.93999853, 32.73706798 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.23689136, 38.89285061 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 29, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.30024826, 32.87920671 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 267, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.6657662, 40.1166722 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.76229172, 29.35739637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.1525205, 29.89149232 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.8103733, 34.71669834 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -115.5676773, 44.76728382 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.51295036, 35.58095779 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.95017958, 40.75326764 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.01939087, 42.25190229 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.45221699, 35.69864497 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.591117, 40.8554138 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.83766469, 32.56483801 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.40670845, 36.36880673 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.58763124, 38.02658833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.75845449, 41.40323442 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 263, "deaths": "7", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.0910613, 34.44465746 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.73384359, 40.18417171 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.30292538, 29.83517605 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.46160542, 39.8523352 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.18153838, 31.10884837 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 59, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.96813006, 28.79780988 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.39169027, 39.42944561 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.51719204, 46.05467334 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 207, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.04566934, 36.73285734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 163, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.18263252, 29.05858895 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.84922065, 38.44272901 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.79328272, 40.84704239 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.23121312, 44.28424356 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.20350509, 38.95471985 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 57, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.51911308, 35.96024096 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.4250831, 46.2918004 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 365, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.65249174, 35.78879266 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.39895211, 30.16548905 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -69.12061935, 44.4858305 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 65, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.30027177, 33.80270512 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.30165174, 34.73376362 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.57440968, 30.73872995 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -118.4775539, 46.23040051 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.99011759, 30.01058447 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.183538, 45.57894064 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.72574783, 48.36876964 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.10446654, 31.14971548 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.16935664, 30.64204028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.73552314, 33.78017694 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.54163073, 42.66858202 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.40954728, 41.03064984 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -101.5436763, 48.22390169 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 42, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.42224148, 31.05449097 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.67795848, 33.41146451 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.35602659, 40.34728141 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.56007641, 41.33559454 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.42672751, 36.99903045 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.83352619, 32.35810271 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.16124662, 38.76529479 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 289, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -74.99556527, 40.85951833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.8433699, 43.56173026 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.10652228, 36.39728256 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 46, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.16557457, 39.42581994 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.26969577, 41.81304978 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.77969117, 35.6728299 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.20280433, 38.90847745 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.2716085, 38.08922676 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 82, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.1691419, 40.33110236 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.1670954, 45.16292781 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.58720034, 44.02211116 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -107.680187, 43.90451606 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.20689944, 31.4092794 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.21800746, 35.976844 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.202587, 39.97015535 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.66002461, 30.61359259 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.79357039, 32.96711864 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.7847688, 44.45275475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.40982703, 38.35309213 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.1049363, 38.60219804 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 62, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.71725711, 41.33577126 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.17407732, 37.75599461 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 106, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.03866652, 30.85288548 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -67.62813524, 45.01607142 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 57, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.82002295, 39.60835778 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 70, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.88429635, 45.03864533 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.94196237, 33.28392041 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 0, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.87948158, 37.96130078 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.22019892, 41.52815707 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.43043448, 43.31153794 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.57299037, 35.83810081 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.49121382, 39.45690571 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.90514104, 36.71380786 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 282, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.0955257, 45.55972701 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 59, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.24582867, 40.19208869 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 120, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.61435303, 41.45961631 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.4945472, 36.29472368 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.40946246, 30.21498498 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.4776, 37.3225 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.61604978, 44.27343241 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.95666289, 36.72341572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 63, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.22974712, 43.36863664 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 326, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -119.6631594, 40.66562265 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 610, "deaths": "13", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.83853204, 42.253105 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.70033724, 36.23103603 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.61413846, 43.97823903 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 166, "deaths": "5", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.30431188, 43.01833055 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.96534501, 44.47068056 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.24317107, 44.11324419 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.91894878, 31.5521809 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.01044989, 39.8633444 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.8251971, 36.80310688 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9626, "deaths": "446", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.378611, 42.278056 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.69573913, 31.64135687 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.02976528, 43.15494365 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.00027268, 35.36438125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 30, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.88844833, 40.82925852 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 47, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.29956506, 41.64938475 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.78644456, 35.23868267 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.90293905, 38.06451466 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.71990865, 36.29896232 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 135, "deaths": "6", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.33237355, 27.7610369 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -111.9145117, 41.27116049 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.54742852, 32.04066113 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.17987389, 42.42853483 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.67989953, 37.52168356 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.33121835, 32.70847669 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.28392912, 33.61300486 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.876329, 37.2813734 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 573, "deaths": "30", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -104.3929621, 40.55499405 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.22132966, 40.72934187 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 54, "deaths": "9", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.30989571, 30.46058217 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.461201, 32.78550125 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.4148538, 30.87882871 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15887, "deaths": "283", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.75741653, 41.16278376 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 183, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.46615476, 40.3137798 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.80213247, 38.11021557 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.6401654, 39.6065771 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.57712739, 44.33853602 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.22319248, 29.27765923 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 238, "deaths": "19", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.7490018, 48.82227976 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.72574721, 32.12009104 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.74908296, 35.25688493 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.74905525, 34.64624278 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.86492015, 40.74911165 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.45591799, 35.92929884 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -114.899966, 39.44157041 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.91556058, 41.75509713 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.96093476, 34.80987459 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.50791236, 41.13863784 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -117.5241763, 46.90022523 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.7041034, 33.98842886 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.62705831, 38.37301947 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.30891118, 31.98773215 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.43438555, 31.97496928 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.74286107, 33.78290391 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.16232895, 36.2084135 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.4684375, 46.35721532 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.17140684, 32.80291082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.31018819, 31.16078225 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 914, "deaths": "37", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.97862712, 41.44619267 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.61535848, 26.47411727 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -103.4793387, 48.34522353 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.58429552, 41.56052014 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -79.72767442, 33.62190129 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.70905141, 37.28131268 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.92994027, 37.73033511 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 287, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.89281867, 35.89099229 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 87, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.6004854, 30.64655664 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.917978, 35.70625477 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 117, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -86.29775884, 36.15496772 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.08693082, 29.1732598 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.17325058, 39.17054517 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 43, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.98182316, 41.82972709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.71268875, 42.986982 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.58595157, 43.58010937 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.63789413, 31.94449367 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 63, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.16085327, 42.33641854 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.73407298, 43.37751174 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 24, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.64477096, 44.06886922 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.84422722, 43.29094334 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.78081305, 43.98772283 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -87.37325922, 34.15030532 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.03391385, 33.08747908 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.37473928, 39.02775007 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.65460265, 33.21570665 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -82.62410519, 36.9746148 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 41, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.62285108, 41.36224827 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.38236368, 32.78722382 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.5162836, 39.20967886 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.04158336, 44.45537896 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -96.0459439, 42.38979414 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.20973757, 40.78579374 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -84.7417556, 38.04178222 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -91.2439489, 35.18902527 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.74006277, 37.8865336 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.26283045, 36.42316318 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -75.33200012, 38.21274277 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1296, "deaths": "29", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.90493363, 42.35026951 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 64, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.85090513, 31.55162306 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.26087602, 43.37750768 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.42328751, 40.47945588 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.73515113, 42.73305373 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.96234781, 45.17297924 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -92.46914488, 37.27029221 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -83.30734173, 40.84339621 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 245, "deaths": "12", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -94.76378225, 39.11727348 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -78.22199579, 42.70145109 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.01074915, 41.51955538 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.54511071, 37.612327 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.07834059, 36.91582035 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -80.66239436, 36.16222629 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 400, "deaths": "17", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -120.7380126, 46.45738486 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -89.7076205, 34.02824175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -123.3086963, 45.23330449 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.39467635, 43.00924485 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -77.10369919, 42.63505484 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 58, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -112.5538588, 34.59933926 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -90.39656148, 32.77890365 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -93.41171338, 35.00292371 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -95.86842453, 44.71710183 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 48, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -108.2691486, 45.93955949 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 56, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.9018288, 38.68278902 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 121, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -70.71052375, 43.47808377 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -97.59710186, 40.87272618 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 233, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.73040131, 39.9210089 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 108, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -81.18085944, 34.97281497 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -76.54412815, 37.24374789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.68790885, 33.17659707 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -121.3535644, 39.26255932 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -151.3907387, 65.50815459 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -113.9066674, 32.76895712 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -102.4258673, 40.00346839 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -99.16987152, 27.00156391 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1373, "deaths": "26", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -116.5765, 53.9333 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -63.0686, 18.2206 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 990, "deaths": "6", "recovered": "984" },
          "geometry": { "type": "Point", "coordinates": [ 117.2264, 31.8257 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "0", "recovered": "14" },
          "geometry": { "type": "Point", "coordinates": [ -69.9683, 12.5211 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 99, "deaths": "2", "recovered": "40" },
          "geometry": { "type": "Point", "coordinates": [ 149.0124, -35.4735 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 588, "deaths": "8", "recovered": "455" },
          "geometry": { "type": "Point", "coordinates": [ 116.4142, 40.1824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "3", "recovered": "23" },
          "geometry": { "type": "Point", "coordinates": [ -64.7505, 32.3078 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -68.2385, 12.1784 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1291, "deaths": "43", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -127.6476, 53.7267 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -64.64, 18.4207 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "1", "recovered": "6" },
          "geometry": { "type": "Point", "coordinates": [ -81.2546, 19.3133 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 351, "deaths": "8", "recovered": "38" },
          "geometry": { "type": "Point", "coordinates": [ -2.3644, 49.3723 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 579, "deaths": "6", "recovered": "570" },
          "geometry": { "type": "Point", "coordinates": [ 107.874, 30.0572 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "1", "recovered": "7" },
          "geometry": { "type": "Point", "coordinates": [ -68.99, 12.1696 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -59.5236, -51.7963 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 184, "deaths": "0", "recovered": "131" },
          "geometry": { "type": "Point", "coordinates": [ -6.9118, 61.8926 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 77, "deaths": "0", "recovered": "34" },
          "geometry": { "type": "Point", "coordinates": [ -53, 4 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 51, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -149.4068, -17.6797 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 351, "deaths": "1", "recovered": "308" },
          "geometry": { "type": "Point", "coordinates": [ 117.9874, 26.0789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 139, "deaths": "2", "recovered": "133" },
          "geometry": { "type": "Point", "coordinates": [ 101.0583, 37.8099 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 120, "deaths": "0", "recovered": "60" },
          "geometry": { "type": "Point", "coordinates": [ -5.3536, 36.1408 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "11" },
          "geometry": { "type": "Point", "coordinates": [ -42.6043, 71.7069 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 141, "deaths": "8", "recovered": "43" },
          "geometry": { "type": "Point", "coordinates": [ -61.551, 16.265 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 121, "deaths": "4", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 144.7937, 13.4443 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1536, "deaths": "8", "recovered": "1411" },
          "geometry": { "type": "Point", "coordinates": [ 113.4244, 23.3417 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 254, "deaths": "2", "recovered": "252" },
          "geometry": { "type": "Point", "coordinates": [ 108.7881, 23.8298 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 146, "deaths": "2", "recovered": "144" },
          "geometry": { "type": "Point", "coordinates": [ 106.8748, 26.8154 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 168, "deaths": "6", "recovered": "162" },
          "geometry": { "type": "Point", "coordinates": [ 109.7453, 19.1959 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 327, "deaths": "6", "recovered": "312" },
          "geometry": { "type": "Point", "coordinates": [ 116.1306, 39.549 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 569, "deaths": "13", "recovered": "470" },
          "geometry": { "type": "Point", "coordinates": [ 127.7615, 47.862 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1276, "deaths": "22", "recovered": "1252" },
          "geometry": { "type": "Point", "coordinates": [ 113.614, 33.882 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 960, "deaths": "4", "recovered": "264" },
          "geometry": { "type": "Point", "coordinates": [ 114.2, 22.3 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 67803, "deaths": "3213", "recovered": "64142" },
          "geometry": { "type": "Point", "coordinates": [ 112.2707, 30.9756 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1019, "deaths": "4", "recovered": "1014" },
          "geometry": { "type": "Point", "coordinates": [ 111.7088, 27.6104 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 124, "deaths": "1", "recovered": "74" },
          "geometry": { "type": "Point", "coordinates": [ 113.9448, 44.0935 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 158, "deaths": "1", "recovered": "82" },
          "geometry": { "type": "Point", "coordinates": [ -4.5481, 54.2361 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 651, "deaths": "0", "recovered": "633" },
          "geometry": { "type": "Point", "coordinates": [ 119.455, 32.9711 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 937, "deaths": "1", "recovered": "935" },
          "geometry": { "type": "Point", "coordinates": [ 115.7221, 27.614 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 98, "deaths": "1", "recovered": "93" },
          "geometry": { "type": "Point", "coordinates": [ 126.1923, 43.6661 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 144, "deaths": "2", "recovered": "131" },
          "geometry": { "type": "Point", "coordinates": [ 122.6085, 41.2956 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "0", "recovered": "10" },
          "geometry": { "type": "Point", "coordinates": [ 113.55, 22.1667 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 217, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -98.8139, 53.7609 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 154, "deaths": "6", "recovered": "50" },
          "geometry": { "type": "Point", "coordinates": [ -61.0242, 14.6415 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 171, "deaths": "2", "recovered": "22" },
          "geometry": { "type": "Point", "coordinates": [ 45.166244, -12.8275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -62.187366, 16.742498 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 105, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -66.4619, 46.5653 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ 165.618042, -20.904305 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2734, "deaths": "21", "recovered": "4" },
          "geometry": { "type": "Point", "coordinates": [ 151.2093, -33.8688 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 228, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -57.6604, 53.1355 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 75, "deaths": "0", "recovered": "75" },
          "geometry": { "type": "Point", "coordinates": [ 106.1655, 37.2692 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 145.6739, 15.0979 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 28, "deaths": "0", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 130.8456, -12.4634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -124.8457, 64.8255 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 310, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -63.7443, 44.682 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5276, "deaths": "153", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.3232, 51.2538 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -63.4168, 46.5107 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 620, "deaths": "24", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -66.5901, 18.2208 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "18" },
          "geometry": { "type": "Point", "coordinates": [ 95.9956, 35.7452 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10031, "deaths": "175", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -73.5491, 52.9399 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 943, "deaths": "4", "recovered": "173" },
          "geometry": { "type": "Point", "coordinates": [ 153.0251, -27.4698 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 358, "deaths": "0", "recovered": "40" },
          "geometry": { "type": "Point", "coordinates": [ 55.5364, -21.1151 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -62.8333, 17.9 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -56.3159, 46.8852 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 260, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -106.4509, 52.9399 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 256, "deaths": "3", "recovered": "246" },
          "geometry": { "type": "Point", "coordinates": [ 108.8701, 35.1917 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 783, "deaths": "7", "recovered": "755" },
          "geometry": { "type": "Point", "coordinates": [ 118.1498, 36.3427 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 543, "deaths": "7", "recovered": "418" },
          "geometry": { "type": "Point", "coordinates": [ 121.4491, 31.202 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 163, "deaths": "0", "recovered": "134" },
          "geometry": { "type": "Point", "coordinates": [ 112.2922, 37.5777 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 560, "deaths": "3", "recovered": "541" },
          "geometry": { "type": "Point", "coordinates": [ 102.7103, 30.6171 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 40, "deaths": "6", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -63.0548, 18.0425 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 415, "deaths": "2", "recovered": "53" },
          "geometry": { "type": "Point", "coordinates": [ 138.6007, -34.9285 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 32, "deaths": "2", "recovered": "7" },
          "geometry": { "type": "Point", "coordinates": [ -63.0501, 18.0708 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 98, "deaths": "3", "recovered": "26" },
          "geometry": { "type": "Point", "coordinates": [ 147.3272, -42.8821 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 180, "deaths": "3", "recovered": "152" },
          "geometry": { "type": "Point", "coordinates": [ 117.323, 39.3054 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ 88.0924, 31.6927 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -71.7979, 21.694 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1212, "deaths": "12", "recovered": "620" },
          "geometry": { "type": "Point", "coordinates": [ 144.9631, -37.8136 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -64.8963, 18.3358 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 481, "deaths": "6", "recovered": "162" },
          "geometry": { "type": "Point", "coordinates": [ 115.8605, -31.9505 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 76, "deaths": "3", "recovered": "73" },
          "geometry": { "type": "Point", "coordinates": [ 85.2401, 41.1129 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -135, 64.2823 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 184, "deaths": "2", "recovered": "173" },
          "geometry": { "type": "Point", "coordinates": [ 101.487, 24.974 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1266, "deaths": "1", "recovered": "1232" },
          "geometry": { "type": "Point", "coordinates": [ 120.0934, 29.1832 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 444, "deaths": "14", "recovered": "29" },
          "geometry": { "type": "Point", "coordinates": [ 67.709953, 33.93911 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 400, "deaths": "22", "recovered": "154" },
          "geometry": { "type": "Point", "coordinates": [ 20.1683, 41.1533 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1572, "deaths": "205", "recovered": "237" },
          "geometry": { "type": "Point", "coordinates": [ 1.6596, 28.0339 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 564, "deaths": "23", "recovered": "52" },
          "geometry": { "type": "Point", "coordinates": [ 1.5218, 42.5063 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "2", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 17.8739, -11.2027 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "2", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -61.7964, 17.0608 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1715, "deaths": "63", "recovered": "358" },
          "geometry": { "type": "Point", "coordinates": [ -63.6167, -38.4161 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 881, "deaths": "9", "recovered": "114" },
          "geometry": { "type": "Point", "coordinates": [ 45.0382, 40.0691 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12942, "deaths": "273", "recovered": "4512" },
          "geometry": { "type": "Point", "coordinates": [ 14.5501, 47.5162 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 822, "deaths": "8", "recovered": "63" },
          "geometry": { "type": "Point", "coordinates": [ 47.5769, 40.1431 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 40, "deaths": "7", "recovered": "5" },
          "geometry": { "type": "Point", "coordinates": [ -78.035889, 25.025885 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 823, "deaths": "5", "recovered": "477" },
          "geometry": { "type": "Point", "coordinates": [ 50.55, 26.0275 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 218, "deaths": "20", "recovered": "33" },
          "geometry": { "type": "Point", "coordinates": [ 90.3563, 23.685 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 63, "deaths": "3", "recovered": "8" },
          "geometry": { "type": "Point", "coordinates": [ -59.5432, 13.1939 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1066, "deaths": "13", "recovered": "77" },
          "geometry": { "type": "Point", "coordinates": [ 27.9534, 53.7098 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23403, "deaths": "2240", "recovered": "4681" },
          "geometry": { "type": "Point", "coordinates": [ 4.469936, 50.8333 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -88.4976, 17.1899 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 26, "deaths": "1", "recovered": "5" },
          "geometry": { "type": "Point", "coordinates": [ 2.3158, 9.3077 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5, "deaths": "0", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 90.4336, 27.5142 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 210, "deaths": "15", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ -63.5887, -16.2902 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 804, "deaths": "34", "recovered": "79" },
          "geometry": { "type": "Point", "coordinates": [ 17.6791, 43.9159 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 24.6849, -22.3285 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16170, "deaths": "819", "recovered": "127" },
          "geometry": { "type": "Point", "coordinates": [ -51.9253, -14.235 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 135, "deaths": "1", "recovered": "91" },
          "geometry": { "type": "Point", "coordinates": [ 114.7277, 4.5353 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 593, "deaths": "24", "recovered": "42" },
          "geometry": { "type": "Point", "coordinates": [ 25.4858, 42.7339 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 414, "deaths": "23", "recovered": "134" },
          "geometry": { "type": "Point", "coordinates": [ -1.5616, 12.2383 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 22, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 95.956, 21.9162 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 29.9189, -3.3731 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "1", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -23.0418, 16.5388 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 117, "deaths": "0", "recovered": "63" },
          "geometry": { "type": "Point", "coordinates": [ 104.9167, 11.55 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 730, "deaths": "10", "recovered": "60" },
          "geometry": { "type": "Point", "coordinates": [ 11.5021, 3.848 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 20.9394, 6.6111 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "0", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 18.7322, 15.4542 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5546, "deaths": "48", "recovered": "1115" },
          "geometry": { "type": "Point", "coordinates": [ -71.543, -35.6751 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2054, "deaths": "54", "recovered": "123" },
          "geometry": { "type": "Point", "coordinates": [ -74.2973, 4.5709 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 45, "deaths": "5", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 15.2832, -4.2634 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 180, "deaths": "18", "recovered": "9" },
          "geometry": { "type": "Point", "coordinates": [ 15.307045, -4.322447 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 502, "deaths": "3", "recovered": "29" },
          "geometry": { "type": "Point", "coordinates": [ -83.7534, 9.7489 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 384, "deaths": "3", "recovered": "48" },
          "geometry": { "type": "Point", "coordinates": [ -5.5471, 7.54 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1343, "deaths": "19", "recovered": "179" },
          "geometry": { "type": "Point", "coordinates": [ 15.2, 45.1 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 457, "deaths": "12", "recovered": "27" },
          "geometry": { "type": "Point", "coordinates": [ -77.781167, 21.521757 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 526, "deaths": "9", "recovered": "52" },
          "geometry": { "type": "Point", "coordinates": [ 33.4299, 35.1264 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5312, "deaths": "99", "recovered": "233" },
          "geometry": { "type": "Point", "coordinates": [ 15.473, 49.8175 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5402, "deaths": "218", "recovered": "1621" },
          "geometry": { "type": "Point", "coordinates": [ 9.5018, 56.2639 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 135, "deaths": "0", "recovered": "25" },
          "geometry": { "type": "Point", "coordinates": [ 42.5903, 11.8251 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -61.371, 15.415 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2111, "deaths": "108", "recovered": "50" },
          "geometry": { "type": "Point", "coordinates": [ -70.1627, 18.7357 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4450, "deaths": "242", "recovered": "140" },
          "geometry": { "type": "Point", "coordinates": [ -78.1834, -1.8312 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1560, "deaths": "103", "recovered": "305" },
          "geometry": { "type": "Point", "coordinates": [ 30.802498, 26.820553 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 93, "deaths": "5", "recovered": "9" },
          "geometry": { "type": "Point", "coordinates": [ -88.8965, 13.7942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 18, "deaths": "0", "recovered": "3" },
          "geometry": { "type": "Point", "coordinates": [ 10.2679, 1.6508 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 39.7823, 15.1794 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1185, "deaths": "24", "recovered": "72" },
          "geometry": { "type": "Point", "coordinates": [ 25.0136, 58.5953 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "7" },
          "geometry": { "type": "Point", "coordinates": [ 31.4659, -26.5225 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 55, "deaths": "2", "recovered": "4" },
          "geometry": { "type": "Point", "coordinates": [ 40.4897, 9.145 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 178.065, -17.7134 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2487, "deaths": "40", "recovered": "300" },
          "geometry": { "type": "Point", "coordinates": [ 25.748151, 61.92411 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 112950, "deaths": "10869", "recovered": "21254" },
          "geometry": { "type": "Point", "coordinates": [ 2.2137, 46.2276 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 34, "deaths": "1", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ 11.6094, -0.8037 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "1", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ -15.3101, 13.4432 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 211, "deaths": "3", "recovered": "50" },
          "geometry": { "type": "Point", "coordinates": [ 43.3569, 42.3154 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 113296, "deaths": "2349", "recovered": "46300" },
          "geometry": { "type": "Point", "coordinates": [ 10.451526, 51.165691 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 313, "deaths": "6", "recovered": "34" },
          "geometry": { "type": "Point", "coordinates": [ -1.0232, 7.9465 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1884, "deaths": "83", "recovered": "269" },
          "geometry": { "type": "Point", "coordinates": [ 21.8243, 39.0742 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -61.679, 12.1165 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 87, "deaths": "3", "recovered": "17" },
          "geometry": { "type": "Point", "coordinates": [ -90.2308, 15.7835 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 164, "deaths": "0", "recovered": "5" },
          "geometry": { "type": "Point", "coordinates": [ -9.6966, 9.9456 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 33, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -15.1804, 11.8037 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 37, "deaths": "6", "recovered": "8" },
          "geometry": { "type": "Point", "coordinates": [ -58.93018, 4.860416 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 27, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -72.2852, 18.9712 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 12.4534, 41.9029 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 312, "deaths": "22", "recovered": "6" },
          "geometry": { "type": "Point", "coordinates": [ -86.2419, 15.2 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 895, "deaths": "58", "recovered": "94" },
          "geometry": { "type": "Point", "coordinates": [ 19.5033, 47.1625 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1616, "deaths": "6", "recovered": "633" },
          "geometry": { "type": "Point", "coordinates": [ -19.0208, 64.9631 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5916, "deaths": "178", "recovered": "506" },
          "geometry": { "type": "Point", "coordinates": [ 78.96288, 20.593684 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2956, "deaths": "240", "recovered": "222" },
          "geometry": { "type": "Point", "coordinates": [ 113.9213, -0.7893 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 64586, "deaths": "3993", "recovered": "29812" },
          "geometry": { "type": "Point", "coordinates": [ 53.688046, 32.427908 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1202, "deaths": "69", "recovered": "452" },
          "geometry": { "type": "Point", "coordinates": [ 43.679291, 33.223191 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6074, "deaths": "235", "recovered": "25" },
          "geometry": { "type": "Point", "coordinates": [ -7.6921, 53.1424 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9404, "deaths": "73", "recovered": "801" },
          "geometry": { "type": "Point", "coordinates": [ 34.851612, 31.046051 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 139422, "deaths": "17669", "recovered": "26491" },
          "geometry": { "type": "Point", "coordinates": [ 12.56738, 41.87194 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 63, "deaths": "4", "recovered": "10" },
          "geometry": { "type": "Point", "coordinates": [ -77.2975, 18.1096 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4257, "deaths": "93", "recovered": "622" },
          "geometry": { "type": "Point", "coordinates": [ 138.252924, 36.204824 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 358, "deaths": "6", "recovered": "150" },
          "geometry": { "type": "Point", "coordinates": [ 36.51, 31.24 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 727, "deaths": "7", "recovered": "54" },
          "geometry": { "type": "Point", "coordinates": [ 66.9237, 48.0196 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 179, "deaths": "6", "recovered": "9" },
          "geometry": { "type": "Point", "coordinates": [ 37.9062, -0.0236 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10384, "deaths": "200", "recovered": "6776" },
          "geometry": { "type": "Point", "coordinates": [ 127.766922, 35.907757 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 184, "deaths": "5", "recovered": "30" },
          "geometry": { "type": "Point", "coordinates": [ 20.902977, 42.602636 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 855, "deaths": "1", "recovered": "111" },
          "geometry": { "type": "Point", "coordinates": [ 47.481766, 29.31166 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 270, "deaths": "4", "recovered": "33" },
          "geometry": { "type": "Point", "coordinates": [ 74.766098, 41.20438 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 15, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 102.495496, 19.85627 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 577, "deaths": "2", "recovered": "16" },
          "geometry": { "type": "Point", "coordinates": [ 24.6032, 56.8796 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 576, "deaths": "19", "recovered": "62" },
          "geometry": { "type": "Point", "coordinates": [ 35.8623, 33.8547 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 31, "deaths": "4", "recovered": "3" },
          "geometry": { "type": "Point", "coordinates": [ -9.429499, 6.428055 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 21, "deaths": "1", "recovered": "8" },
          "geometry": { "type": "Point", "coordinates": [ 17.228331, 26.3351 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 78, "deaths": "1", "recovered": "55" },
          "geometry": { "type": "Point", "coordinates": [ 9.55, 47.14 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 912, "deaths": "15", "recovered": "8" },
          "geometry": { "type": "Point", "coordinates": [ 23.8813, 55.1694 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3034, "deaths": "46", "recovered": "500" },
          "geometry": { "type": "Point", "coordinates": [ 6.1296, 49.8153 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 93, "deaths": "0", "recovered": "11" },
          "geometry": { "type": "Point", "coordinates": [ 46.869107, -18.766947 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 34.301525, -13.254308 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4119, "deaths": "65", "recovered": "1487" },
          "geometry": { "type": "Point", "coordinates": [ 101.975766, 4.210484 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "0", "recovered": "13" },
          "geometry": { "type": "Point", "coordinates": [ 73.2207, 3.2028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 59, "deaths": "7", "recovered": "16" },
          "geometry": { "type": "Point", "coordinates": [ -3.996166, 17.570692 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 299, "deaths": "1", "recovered": "16" },
          "geometry": { "type": "Point", "coordinates": [ 14.3754, 35.9375 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ -10.9408, 21.0079 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 273, "deaths": "7", "recovered": "19" },
          "geometry": { "type": "Point", "coordinates": [ 57.552152, -20.348404 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2785, "deaths": "141", "recovered": "633" },
          "geometry": { "type": "Point", "coordinates": [ -102.5528, 23.6345 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1174, "deaths": "27", "recovered": "40" },
          "geometry": { "type": "Point", "coordinates": [ 28.3699, 47.4116 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 81, "deaths": "1", "recovered": "4" },
          "geometry": { "type": "Point", "coordinates": [ 7.4167, 43.7333 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "4" },
          "geometry": { "type": "Point", "coordinates": [ 103.8467, 46.8625 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 248, "deaths": "2", "recovered": "4" },
          "geometry": { "type": "Point", "coordinates": [ 19.37439, 42.708678 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1275, "deaths": "93", "recovered": "97" },
          "geometry": { "type": "Point", "coordinates": [ -7.0926, 31.7917 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 17, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ 35.529562, -18.665695 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 16, "deaths": "0", "recovered": "3" },
          "geometry": { "type": "Point", "coordinates": [ 18.4904, -22.9576 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 9, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ 84.25, 28.1667 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 20549, "deaths": "2248", "recovered": "250" },
          "geometry": { "type": "Point", "coordinates": [ 5.2913, 52.1326 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1210, "deaths": "1", "recovered": "282" },
          "geometry": { "type": "Point", "coordinates": [ 174.886, -40.9006 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6, "deaths": "1", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -85.207229, 12.865416 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 342, "deaths": "11", "recovered": "28" },
          "geometry": { "type": "Point", "coordinates": [ 8.081666, 17.607789 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 276, "deaths": "6", "recovered": "44" },
          "geometry": { "type": "Point", "coordinates": [ 8.6753, 9.082 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 617, "deaths": "29", "recovered": "35" },
          "geometry": { "type": "Point", "coordinates": [ 21.7453, 41.6086 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 6086, "deaths": "101", "recovered": "32" },
          "geometry": { "type": "Point", "coordinates": [ 8.4689, 60.472 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 419, "deaths": "2", "recovered": "72" },
          "geometry": { "type": "Point", "coordinates": [ 55.923255, 21.512583 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4263, "deaths": "61", "recovered": "467" },
          "geometry": { "type": "Point", "coordinates": [ 69.3451, 30.3753 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2249, "deaths": "59", "recovered": "16" },
          "geometry": { "type": "Point", "coordinates": [ -80.7821, 8.538 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 143.95555, -6.314993 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 119, "deaths": "5", "recovered": "15" },
          "geometry": { "type": "Point", "coordinates": [ -58.4438, -23.4425 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4342, "deaths": "121", "recovered": "1333" },
          "geometry": { "type": "Point", "coordinates": [ -75.0152, -9.19 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 3870, "deaths": "182", "recovered": "96" },
          "geometry": { "type": "Point", "coordinates": [ 121.774017, 12.879721 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 5205, "deaths": "159", "recovered": "222" },
          "geometry": { "type": "Point", "coordinates": [ 19.1451, 51.9194 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 13141, "deaths": "380", "recovered": "196" },
          "geometry": { "type": "Point", "coordinates": [ -8.2245, 39.3999 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2210, "deaths": "6", "recovered": "178" },
          "geometry": { "type": "Point", "coordinates": [ 51.1839, 25.3548 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4761, "deaths": "220", "recovered": "528" },
          "geometry": { "type": "Point", "coordinates": [ 24.9668, 45.9432 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8672, "deaths": "63", "recovered": "580" },
          "geometry": { "type": "Point", "coordinates": [ 105.318756, 61.52401 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 110, "deaths": "0", "recovered": "7" },
          "geometry": { "type": "Point", "coordinates": [ 29.8739, -1.9403 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -62.782998, 17.357822 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -60.9789, 13.9094 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8, "deaths": "0", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -61.2872, 12.9843 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 279, "deaths": "34", "recovered": "40" },
          "geometry": { "type": "Point", "coordinates": [ 12.4578, 43.9424 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 6.613081, 0.18636 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2932, "deaths": "41", "recovered": "631" },
          "geometry": { "type": "Point", "coordinates": [ 45.079162, 23.885942 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 244, "deaths": "2", "recovered": "113" },
          "geometry": { "type": "Point", "coordinates": [ -14.4524, 14.4974 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2666, "deaths": "65", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 21.0059, 44.0165 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 55.492, -4.6796 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 7, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -11.779889, 8.460555 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1623, "deaths": "6", "recovered": "406" },
          "geometry": { "type": "Point", "coordinates": [ 103.8333, 1.2833 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 682, "deaths": "2", "recovered": "16" },
          "geometry": { "type": "Point", "coordinates": [ 19.699, 48.669 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1091, "deaths": "40", "recovered": "120" },
          "geometry": { "type": "Point", "coordinates": [ 14.9955, 46.1512 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 12, "deaths": "1", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ 46.199616, 5.152149 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1845, "deaths": "18", "recovered": "95" },
          "geometry": { "type": "Point", "coordinates": [ 22.9375, -30.5595 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 31.307, 6.877 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 148220, "deaths": "14792", "recovered": "48021" },
          "geometry": { "type": "Point", "coordinates": [ -3.74922, 40.463667 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 189, "deaths": "7", "recovered": "44" },
          "geometry": { "type": "Point", "coordinates": [ 80.771797, 7.873054 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 14, "deaths": "2", "recovered": "2" },
          "geometry": { "type": "Point", "coordinates": [ 30.2176, 12.8628 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 10, "deaths": "1", "recovered": "3" },
          "geometry": { "type": "Point", "coordinates": [ -56.0278, 3.9193 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 8419, "deaths": "687", "recovered": "205" },
          "geometry": { "type": "Point", "coordinates": [ 18.643501, 60.128161 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 23280, "deaths": "895", "recovered": "9800" },
          "geometry": { "type": "Point", "coordinates": [ 8.2275, 46.8182 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 19, "deaths": "2", "recovered": "4" },
          "geometry": { "type": "Point", "coordinates": [ 38.996815, 34.802075 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 379, "deaths": "5", "recovered": "61" },
          "geometry": { "type": "Point", "coordinates": [ 121, 23.7 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 25, "deaths": "1", "recovered": "5" },
          "geometry": { "type": "Point", "coordinates": [ 34.888822, -6.369028 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2369, "deaths": "30", "recovered": "888" },
          "geometry": { "type": "Point", "coordinates": [ 100.992541, 15.870032 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 125.727539, -8.874217 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 70, "deaths": "3", "recovered": "23" },
          "geometry": { "type": "Point", "coordinates": [ 0.8248, 8.6195 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 107, "deaths": "8", "recovered": "1" },
          "geometry": { "type": "Point", "coordinates": [ -61.2225, 10.6918 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 628, "deaths": "24", "recovered": "25" },
          "geometry": { "type": "Point", "coordinates": [ 9.537499, 33.886917 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 38226, "deaths": "812", "recovered": "1846" },
          "geometry": { "type": "Point", "coordinates": [ 35.2433, 38.9637 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 53, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 32.290275, 1.373333 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 1668, "deaths": "52", "recovered": "35" },
          "geometry": { "type": "Point", "coordinates": [ 31.1656, 48.3794 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 2659, "deaths": "12", "recovered": "239" },
          "geometry": { "type": "Point", "coordinates": [ 53.847818, 23.424076 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 60733, "deaths": "7097", "recovered": "135" },
          "geometry": { "type": "Point", "coordinates": [ -3.436, 55.3781 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 424, "deaths": "7", "recovered": "150" },
          "geometry": { "type": "Point", "coordinates": [ -55.7658, -32.5228 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 545, "deaths": "3", "recovered": "30" },
          "geometry": { "type": "Point", "coordinates": [ 64.585262, 41.377491 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 167, "deaths": "9", "recovered": "65" },
          "geometry": { "type": "Point", "coordinates": [ -66.5897, 6.4238 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 251, "deaths": "0", "recovered": "126" },
          "geometry": { "type": "Point", "coordinates": [ 108.277199, 14.058324 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 263, "deaths": "1", "recovered": "44" },
          "geometry": { "type": "Point", "coordinates": [ 35.2332, 31.9522 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 4, "deaths": "0", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ -12.8858, 24.2155 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 39, "deaths": "1", "recovered": "7" },
          "geometry": { "type": "Point", "coordinates": [ 27.849332, -13.133897 ]}
        },
        {
          "type": "Feature", "properties": { "confirmed": 11, "deaths": "3", "recovered": "0" },
          "geometry": { "type": "Point", "coordinates": [ 29.154857, -19.015438 ]}
        }
      ]
    };
    setTimeout(() => {
      this.mapHidden = false;
    }, 1000);
  }

  readTextFile() {
    const rawFile = new XMLHttpRequest();
    rawFile.open('GET', 'assets/04-08-2020.csv', true);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          const allText = rawFile.responseText;
          this.processData(allText);
        }
      }
    };
    rawFile.send(null);
  }

  processData(allText) {
    const columns = allText.split(/\r\n|\n/);
    let json = '';
    let dots = 0;
    for (let i = 0; i < columns.length; i++) {
      const rows = columns[i].split(',');
      for (let j = 0; j < rows.length; j = j + 5) {
        if (rows[j] !== '' && rows[j + 1] !== '') {
          json += `
          {
            "type": "Feature", "properties": { "confirmed": ${rows[j + 2].trim()}, "deaths": "${rows[j + 3].trim()}", "recovered": "${rows[j + 4].trim()}" },
            "geometry": { "type": "Point", "coordinates": [ ${rows[j + 1].trim()}, ${rows[j].trim()} ]}
          },`;
          dots++;
        }
      }
    }
    console.log(json);
    console.log(dots);
  }
}
