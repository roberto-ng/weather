import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from './location';

/** Used in the Nominatim API response */
type NominatimLocation = {
  place_id: number,
  display_name: string,
  lat: string,
  lon: string,
};

@Injectable({
  providedIn: 'root'
})
export class LocationFetcherService {
  static readonly NOMINATIM_API_URL = 'https://nominatim.openstreetmap.org/search.php?';

  constructor(private _http: HttpClient) { }

  getLocation(cityName: string) {
    const url = this.buildURL(cityName);

    return this._http.get<NominatimLocation[]>(url, {
      headers: {
        'Accept-Language': 'pt, en',
      },
    });
  }

  private buildURL(cityName: string): string {
    return LocationFetcherService.NOMINATIM_API_URL + new URLSearchParams({
      q: cityName,
      format: 'jsonv2',
    });
  }
}
