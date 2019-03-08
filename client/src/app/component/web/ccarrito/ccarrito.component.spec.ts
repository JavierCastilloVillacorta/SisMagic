import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcarritoComponent } from './ccarrito.component';

describe('CcarritoComponent', () => {
  let component: CcarritoComponent;
  let fixture: ComponentFixture<CcarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
