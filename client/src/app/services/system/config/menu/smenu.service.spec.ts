import { TestBed } from '@angular/core/testing';

import { SmenuService } from './smenu.service';

describe('SmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmenuService = TestBed.get(SmenuService);
    expect(service).toBeTruthy();
  });
});
