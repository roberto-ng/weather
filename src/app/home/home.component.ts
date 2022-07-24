import { Component, OnInit } from '@angular/core';
import type { Location } from '../location/location';
import type { Weather } from './../location/weather-fetcher.service';
import { WeatherFetcherService } from './../location/weather-fetcher.service';
import { LocationStoreService } from './../location/location-store.service';

type CardData = {
  location: Location,
  weather: Weather | null,
  isLoading: boolean,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: CardData[] = [];

  constructor(
    private _locationStore: LocationStoreService,
    private _weatherFetcher: WeatherFetcherService,
  ) { }

  ngOnInit(): void {
    for (let location of this.locations) {
      this.data = [...this.data, {
        location,
        weather: null,
        isLoading: true,
      }];
    }
    
    this.fetchData();
  }

  fetchData(refresh = false): void {
    for (let location of this.locations) {
      let i = this.locations.indexOf(location);

      this._weatherFetcher
        .getWeather(location)
        .subscribe({
          next: (weather) => {
            this.data = this.data.map((item, j) => {
              if (i === j) {
                return {...item, weather: weather, isLoading: false };
              } else {
                return item;
              }
            });
          },

          error: (err) => {
            console.error(err);

            this.data = this.data.map((item, j) => {
              if (i === j) {
                return {...item, isLoading: false };
              } else {
                return item;
              }
            });
          },
        });
    }
  }

  get locations(): Location[] {
    return this._locationStore.locations;
  }
}
