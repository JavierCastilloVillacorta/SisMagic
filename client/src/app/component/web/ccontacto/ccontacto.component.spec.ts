import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontactoComponent } from './ccontacto.component';

describe('CcontactoComponent', () => {
  let component: CcontactoComponent;
  let fixture: ComponentFixture<CcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
