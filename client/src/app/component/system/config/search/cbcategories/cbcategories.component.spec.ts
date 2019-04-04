import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbcategoriesComponent } from './cbcategories.component';

describe('CbcategoriesComponent', () => {
  let component: CbcategoriesComponent;
  let fixture: ComponentFixture<CbcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
