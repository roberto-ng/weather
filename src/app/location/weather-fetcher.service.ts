import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Location } from './location';

export type Weather = {
  name: string,
  airTemperature: number,
};

export interface TimeSerie {
  data: {
      instant: {
          details: {
              air_temperature: number,
              air_pressure_at_sea_level: number,
              cloud_area_fraction: number,
              relative_humidity: number,
              wind_from_direction: number,
              wind_speed: number,
          },
      },
  },
}

export interface MetResult {
  properties: {
      timeseries: TimeSerie[],
  },
}

@Injectable({
  providedIn: 'root'
})
export class WeatherFetcherService {
  static readonly MET_NO_API_URL = 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json?';

  constructor(private _http: HttpClient) { }

  getWeather(location: Location): Observable<Weather | null> {
    const url = this.buildURL(location);

    return this._http.get<MetResult>(url)
      .pipe(map(res => {
        if (res.properties.timeseries.length < 1) {
          console.error(`Weather of location "${location}" not found`);
          return null;
        }

        const timeserie = res.properties.timeseries[0];
        const details = timeserie.data.instant.details;
        const weather: Weather = {
          name: location.name,
          airTemperature: Math.round(details.air_temperature),
        };

        return weather;
      }))
  }

  private buildURL(location: Location): string {
    return WeatherFetcherService.MET_NO_API_URL + new URLSearchParams({
      lat: location.lat,
      lon: location.lon,
    });
  }
}