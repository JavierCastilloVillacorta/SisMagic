import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClbrandvehicleComponent } from './clbrandvehicle.component';

describe('ClbrandvehicleComponent', () => {
  let component: ClbrandvehicleComponent;
  let fixture: ComponentFixture<ClbrandvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClbrandvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClbrandvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
