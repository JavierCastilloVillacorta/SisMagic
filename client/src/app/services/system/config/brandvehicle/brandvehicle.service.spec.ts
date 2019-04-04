import { TestBed } from '@angular/core/testing';

import { BrandvehicleService } from './brandvehicle.service';

describe('BrandvehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandvehicleService = TestBed.get(BrandvehicleService);
    expect(service).toBeTruthy();
  });
});
