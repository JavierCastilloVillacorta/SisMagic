import { TestBed } from '@angular/core/testing';

import { EnginevehicleService } from './enginevehicle.service';

describe('EnginevehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnginevehicleService = TestBed.get(EnginevehicleService);
    expect(service).toBeTruthy();
  });
});
