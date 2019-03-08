import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinicioComponent } from './cinicio.component';

describe('CinicioComponent', () => {
  let component: CinicioComponent;
  let fixture: ComponentFixture<CinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
