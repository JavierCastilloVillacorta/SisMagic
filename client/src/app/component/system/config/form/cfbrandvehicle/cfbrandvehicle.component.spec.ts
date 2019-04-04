import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbrandvehicleComponent } from './cfbrandvehicle.component';

describe('CfbrandvehicleComponent', () => {
  let component: CfbrandvehicleComponent;
  let fixture: ComponentFixture<CfbrandvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfbrandvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfbrandvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
