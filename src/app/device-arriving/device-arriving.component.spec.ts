import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceArrivingComponent } from './device-arriving.component';

describe('DeviceArrivingComponent', () => {
  let component: DeviceArrivingComponent;
  let fixture: ComponentFixture<DeviceArrivingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceArrivingComponent]
    });
    fixture = TestBed.createComponent(DeviceArrivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
