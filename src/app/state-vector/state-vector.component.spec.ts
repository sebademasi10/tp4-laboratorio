import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateVectorComponent } from './state-vector.component';

describe('StateVectorComponent', () => {
  let component: StateVectorComponent;
  let fixture: ComponentFixture<StateVectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateVectorComponent]
    });
    fixture = TestBed.createComponent(StateVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
