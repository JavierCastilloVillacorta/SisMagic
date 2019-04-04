import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfenginevehicleComponent } from './cfenginevehicle.component';

describe('CfenginevehicleComponent', () => {
  let component: CfenginevehicleComponent;
  let fixture: ComponentFixture<CfenginevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfenginevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfenginevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
