import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClproductsComponent } from './clproducts.component';

describe('ClproductsComponent', () => {
  let component: ClproductsComponent;
  let fixture: ComponentFixture<ClproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
