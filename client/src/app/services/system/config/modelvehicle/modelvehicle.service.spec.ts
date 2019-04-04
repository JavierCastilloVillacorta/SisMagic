import { TestBed } from '@angular/core/testing';

import { ModelvehicleService } from './modelvehicle.service';

describe('ModelvehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelvehicleService = TestBed.get(ModelvehicleService);
    expect(service).toBeTruthy();
  });
});
