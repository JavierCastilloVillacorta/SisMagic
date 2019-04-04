import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgasComponent } from './clgas.component';

describe('ClgasComponent', () => {
  let component: ClgasComponent;
  let fixture: ComponentFixture<ClgasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClgasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
