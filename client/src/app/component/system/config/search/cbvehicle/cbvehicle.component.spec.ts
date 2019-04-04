import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbvehicleComponent } from './cbvehicle.component';

describe('CbvehicleComponent', () => {
  let component: CbvehicleComponent;
  let fixture: ComponentFixture<CbvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
