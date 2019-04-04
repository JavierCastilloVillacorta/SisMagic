import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbwarehouseComponent } from './cbwarehouse.component';

describe('CbwarehouseComponent', () => {
  let component: CbwarehouseComponent;
  let fixture: ComponentFixture<CbwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
