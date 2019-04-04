import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClwarehouseComponent } from './clwarehouse.component';

describe('ClwarehouseComponent', () => {
  let component: ClwarehouseComponent;
  let fixture: ComponentFixture<ClwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
