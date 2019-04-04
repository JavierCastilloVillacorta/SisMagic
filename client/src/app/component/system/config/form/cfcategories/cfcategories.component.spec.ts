import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcategoriesComponent } from './cfcategories.component';

describe('CfcategoriesComponent', () => {
  let component: CfcategoriesComponent;
  let fixture: ComponentFixture<CfcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
