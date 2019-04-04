import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClenginevehicleComponent } from './clenginevehicle.component';

describe('ClenginevehicleComponent', () => {
  let component: ClenginevehicleComponent;
  let fixture: ComponentFixture<ClenginevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClenginevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClenginevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
