import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfgasComponent } from './cfgas.component';

describe('CfgasComponent', () => {
  let component: CfgasComponent;
  let fixture: ComponentFixture<CfgasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfgasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
