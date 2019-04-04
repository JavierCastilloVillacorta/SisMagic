import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbmodelvehicleComponent } from './cbmodelvehicle.component';

describe('CbmodelvehicleComponent', () => {
  let component: CbmodelvehicleComponent;
  let fixture: ComponentFixture<CbmodelvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbmodelvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbmodelvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
