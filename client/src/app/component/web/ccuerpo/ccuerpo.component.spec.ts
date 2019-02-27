import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcuerpoComponent } from './ccuerpo.component';

describe('CcuerpoComponent', () => {
  let component: CcuerpoComponent;
  let fixture: ComponentFixture<CcuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
