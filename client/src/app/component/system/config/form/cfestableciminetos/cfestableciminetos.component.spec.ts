import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfestableciminetosComponent } from './cfestableciminetos.component';

describe('CfestableciminetosComponent', () => {
  let component: CfestableciminetosComponent;
  let fixture: ComponentFixture<CfestableciminetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfestableciminetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfestableciminetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
