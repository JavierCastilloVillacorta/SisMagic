import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcategoriesComponent } from './clcategories.component';

describe('ClcategoriesComponent', () => {
  let component: ClcategoriesComponent;
  let fixture: ComponentFixture<ClcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
