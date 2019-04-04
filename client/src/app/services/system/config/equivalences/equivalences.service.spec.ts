import { TestBed } from '@angular/core/testing';

import { EquivalencesService } from './equivalences.service';

describe('EquivalencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquivalencesService = TestBed.get(EquivalencesService);
    expect(service).toBeTruthy();
  });
});
