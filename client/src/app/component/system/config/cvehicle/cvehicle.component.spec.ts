import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvehicleComponent } from './cvehicle.component';

describe('CvehicleComponent', () => {
  let component: CvehicleComponent;
  let fixture: ComponentFixture<CvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
