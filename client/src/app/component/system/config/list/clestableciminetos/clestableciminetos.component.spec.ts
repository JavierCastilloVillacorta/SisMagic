import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClestableciminetosComponent } from './clestableciminetos.component';

describe('ClestableciminetosComponent', () => {
  let component: ClestableciminetosComponent;
  let fixture: ComponentFixture<ClestableciminetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClestableciminetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClestableciminetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
