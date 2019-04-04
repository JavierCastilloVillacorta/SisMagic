import { TestBed } from '@angular/core/testing';

import { SuperproductService } from './superproduct.service';

describe('SuperproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperproductService = TestBed.get(SuperproductService);
    expect(service).toBeTruthy();
  });
});
