import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfwarehouseComponent } from './cfwarehouse.component';

describe('CfwarehouseComponent', () => {
  let component: CfwarehouseComponent;
  let fixture: ComponentFixture<CfwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
