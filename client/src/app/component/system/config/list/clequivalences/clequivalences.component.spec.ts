import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClequivalencesComponent } from './clequivalences.component';

describe('ClequivalencesComponent', () => {
  let component: ClequivalencesComponent;
  let fixture: ComponentFixture<ClequivalencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClequivalencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClequivalencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
