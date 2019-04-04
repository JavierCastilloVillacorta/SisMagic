import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfpositionproductComponent } from './cfpositionproduct.component';

describe('CfpositionproductComponent', () => {
  let component: CfpositionproductComponent;
  let fixture: ComponentFixture<CfpositionproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfpositionproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfpositionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
