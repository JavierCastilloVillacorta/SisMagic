import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbbrandvehicleComponent } from './cbbrandvehicle.component';

describe('CbbrandvehicleComponent', () => {
  let component: CbbrandvehicleComponent;
  let fixture: ComponentFixture<CbbrandvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbbrandvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbbrandvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
