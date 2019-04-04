import { TestBed } from '@angular/core/testing';

import { EquivalenceproductService } from './equivalenceproduct.service';

describe('EquivalenceproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquivalenceproductService = TestBed.get(EquivalenceproductService);
    expect(service).toBeTruthy();
  });
});
