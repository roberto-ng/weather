import { TestBed } from '@angular/core/testing';

import { WeatherFetcherService } from './weather-fetcher.service';

describe('WeatherFetcherService', () => {
  let service: WeatherFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
