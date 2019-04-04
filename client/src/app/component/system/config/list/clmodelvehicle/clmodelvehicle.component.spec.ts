import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClmodelvehicleComponent } from './clmodelvehicle.component';

describe('ClmodelvehicleComponent', () => {
  let component: ClmodelvehicleComponent;
  let fixture: ComponentFixture<ClmodelvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClmodelvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClmodelvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
