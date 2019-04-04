import { TestBed } from '@angular/core/testing';

import { GalleryproductService } from './galleryproduct.service';

describe('GalleryproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryproductService = TestBed.get(GalleryproductService);
    expect(service).toBeTruthy();
  });
});
