import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbenginevehicleComponent } from './cbenginevehicle.component';

describe('CbenginevehicleComponent', () => {
  let component: CbenginevehicleComponent;
  let fixture: ComponentFixture<CbenginevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbenginevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbenginevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
