import { TestBed } from '@angular/core/testing';

import { SestablishmentsService } from './sestablishments.service';

describe('SestablishmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SestablishmentsService = TestBed.get(SestablishmentsService);
    expect(service).toBeTruthy();
  });
});
