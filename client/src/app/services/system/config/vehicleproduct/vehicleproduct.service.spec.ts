import { TestBed } from '@angular/core/testing';

import { VehicleproductService } from './vehicleproduct.service';

describe('VehicleproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleproductService = TestBed.get(VehicleproductService);
    expect(service).toBeTruthy();
  });
});
