import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClsuperproductComponent } from './clsuperproduct.component';

describe('ClsuperproductComponent', () => {
  let component: ClsuperproductComponent;
  let fixture: ComponentFixture<ClsuperproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClsuperproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClsuperproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
