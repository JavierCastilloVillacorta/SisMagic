import { TestBed } from '@angular/core/testing';

import { GasService } from './gas.service';

describe('GasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GasService = TestBed.get(GasService);
    expect(service).toBeTruthy();
  });
});
