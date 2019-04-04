import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbproductsComponent } from './cbproducts.component';

describe('CbproductsComponent', () => {
  let component: CbproductsComponent;
  let fixture: ComponentFixture<CbproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
