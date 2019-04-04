import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbestableciminetosComponent } from './cbestableciminetos.component';

describe('CbestableciminetosComponent', () => {
  let component: CbestableciminetosComponent;
  let fixture: ComponentFixture<CbestableciminetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbestableciminetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbestableciminetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
