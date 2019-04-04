import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfvehicleComponent } from './cfvehicle.component';

describe('CfvehicleComponent', () => {
  let component: CfvehicleComponent;
  let fixture: ComponentFixture<CfvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
