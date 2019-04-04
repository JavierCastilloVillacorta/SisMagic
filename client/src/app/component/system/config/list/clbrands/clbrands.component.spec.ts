import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClbrandsComponent } from './clbrands.component';

describe('ClbrandsComponent', () => {
  let component: ClbrandsComponent;
  let fixture: ComponentFixture<ClbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
