import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestablecimientosComponent } from './cestablecimientos.component';

describe('CestablecimientosComponent', () => {
  let component: CestablecimientosComponent;
  let fixture: ComponentFixture<CestablecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestablecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
