import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmodelvehicleComponent } from './cfmodelvehicle.component';

describe('CfmodelvehicleComponent', () => {
  let component: CfmodelvehicleComponent;
  let fixture: ComponentFixture<CfmodelvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfmodelvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfmodelvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
