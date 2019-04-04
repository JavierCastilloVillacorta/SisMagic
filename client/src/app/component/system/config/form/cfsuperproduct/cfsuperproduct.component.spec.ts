import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfsuperproductComponent } from './cfsuperproduct.component';

describe('CfsuperproductComponent', () => {
  let component: CfsuperproductComponent;
  let fixture: ComponentFixture<CfsuperproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfsuperproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfsuperproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
