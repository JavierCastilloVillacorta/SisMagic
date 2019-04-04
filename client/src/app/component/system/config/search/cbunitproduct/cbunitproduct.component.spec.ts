import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbunitproductComponent } from './cbunitproduct.component';

describe('CbunitproductComponent', () => {
  let component: CbunitproductComponent;
  let fixture: ComponentFixture<CbunitproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbunitproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbunitproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
