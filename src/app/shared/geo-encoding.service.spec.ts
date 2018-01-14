import { TestBed, inject } from '@angular/core/testing';

import { GeoEncodingService } from './geo-encoding.service';

describe('GeoEncodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoEncodingService]
    });
  });

  it('should be created', inject([GeoEncodingService], (service: GeoEncodingService) => {
    expect(service).toBeTruthy();
  }));
});
