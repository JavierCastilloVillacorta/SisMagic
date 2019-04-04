import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClpositionproductComponent } from './clpositionproduct.component';

describe('ClpositionproductComponent', () => {
  let component: ClpositionproductComponent;
  let fixture: ComponentFixture<ClpositionproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClpositionproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClpositionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
