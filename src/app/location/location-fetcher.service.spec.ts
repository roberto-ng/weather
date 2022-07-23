import { TestBed } from '@angular/core/testing';

import { LocationFetcherService } from './location-fetcher.service';

describe('LocationFetcherService', () => {
  let service: LocationFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
