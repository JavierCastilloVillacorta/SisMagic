import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClvehicleComponent } from './clvehicle.component';

describe('ClvehicleComponent', () => {
  let component: ClvehicleComponent;
  let fixture: ComponentFixture<ClvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
