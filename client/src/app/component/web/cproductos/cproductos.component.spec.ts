import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CproductosComponent } from './cproductos.component';

describe('CproductosComponent', () => {
  let component: CproductosComponent;
  let fixture: ComponentFixture<CproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
