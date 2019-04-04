import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbrandsComponent } from './cfbrands.component';

describe('CfbrandsComponent', () => {
  let component: CfbrandsComponent;
  let fixture: ComponentFixture<CfbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
