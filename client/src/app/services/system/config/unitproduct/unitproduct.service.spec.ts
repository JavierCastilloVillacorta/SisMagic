import { TestBed } from '@angular/core/testing';

import { UnitproductService } from './unitproduct.service';

describe('UnitproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitproductService = TestBed.get(UnitproductService);
    expect(service).toBeTruthy();
  });
});
