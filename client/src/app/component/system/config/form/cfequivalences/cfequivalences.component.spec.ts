import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfequivalencesComponent } from './cfequivalences.component';

describe('CfequivalencesComponent', () => {
  let component: CfequivalencesComponent;
  let fixture: ComponentFixture<CfequivalencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfequivalencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfequivalencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
