import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfunitproductComponent } from './cfunitproduct.component';

describe('CfunitproductComponent', () => {
  let component: CfunitproductComponent;
  let fixture: ComponentFixture<CfunitproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfunitproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfunitproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
