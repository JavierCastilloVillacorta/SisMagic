import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbpositionproductComponent } from './cbpositionproduct.component';

describe('CbpositionproductComponent', () => {
  let component: CbpositionproductComponent;
  let fixture: ComponentFixture<CbpositionproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbpositionproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbpositionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
