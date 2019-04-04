import { TestBed } from '@angular/core/testing';

import { PositionproductService } from './positionproduct.service';

describe('PositionproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionproductService = TestBed.get(PositionproductService);
    expect(service).toBeTruthy();
  });
});
