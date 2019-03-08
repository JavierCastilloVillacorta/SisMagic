import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmenuComponent } from './cmenu.component';

describe('CmenuComponent', () => {
  let component: CmenuComponent;
  let fixture: ComponentFixture<CmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
