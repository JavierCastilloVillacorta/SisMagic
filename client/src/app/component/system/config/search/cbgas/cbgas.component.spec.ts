import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbgasComponent } from './cbgas.component';

describe('CbgasComponent', () => {
  let component: CbgasComponent;
  let fixture: ComponentFixture<CbgasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbgasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
