import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbequivalencesComponent } from './cbequivalences.component';

describe('CbequivalencesComponent', () => {
  let component: CbequivalencesComponent;
  let fixture: ComponentFixture<CbequivalencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbequivalencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbequivalencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
