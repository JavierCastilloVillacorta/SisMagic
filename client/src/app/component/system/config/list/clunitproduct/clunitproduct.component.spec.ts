import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClunitproductComponent } from './clunitproduct.component';

describe('ClunitproductComponent', () => {
  let component: ClunitproductComponent;
  let fixture: ComponentFixture<ClunitproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClunitproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClunitproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
