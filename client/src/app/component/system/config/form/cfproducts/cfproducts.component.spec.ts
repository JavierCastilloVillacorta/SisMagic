import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfproductsComponent } from './cfproducts.component';

describe('CfproductsComponent', () => {
  let component: CfproductsComponent;
  let fixture: ComponentFixture<CfproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
