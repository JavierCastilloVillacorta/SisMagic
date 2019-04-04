import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbsuperproductComponent } from './cbsuperproduct.component';

describe('CbsuperproductComponent', () => {
  let component: CbsuperproductComponent;
  let fixture: ComponentFixture<CbsuperproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbsuperproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbsuperproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
