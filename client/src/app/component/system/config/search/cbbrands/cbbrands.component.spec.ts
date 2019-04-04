import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbbrandsComponent } from './cbbrands.component';

describe('CbbrandsComponent', () => {
  let component: CbbrandsComponent;
  let fixture: ComponentFixture<CbbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
