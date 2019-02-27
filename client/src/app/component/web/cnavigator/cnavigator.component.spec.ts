import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnavigatorComponent } from './cnavigator.component';

describe('CnavigatorComponent', () => {
  let component: CnavigatorComponent;
  let fixture: ComponentFixture<CnavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
