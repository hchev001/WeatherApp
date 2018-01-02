import { TestBed, inject } from '@angular/core/testing';

import { ZipServiceService } from './zip-service.service';

describe('ZipServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipServiceService]
    });
  });

  it('should be created', inject([ZipServiceService], (service: ZipServiceService) => {
    expect(service).toBeTruthy();
  }));
});
