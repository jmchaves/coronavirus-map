import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapTabPage } from './map-tab.page';

describe('Map.PageComponent', () => {
  let component: MapTabPage;
  let fixture: ComponentFixture<MapTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
