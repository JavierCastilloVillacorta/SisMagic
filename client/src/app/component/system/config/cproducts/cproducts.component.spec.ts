import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CproductsComponent } from './cproducts.component';

describe('CproductsComponent', () => {
  let component: CproductsComponent;
  let fixture: ComponentFixture<CproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
