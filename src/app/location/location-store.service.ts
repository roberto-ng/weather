import { Injectable } from '@angular/core';  
import { Location } from './location';

const defaultLocations: Location[] = [
  { name: 'Paranapiacaba', lat: '-23.7778474', lon: '-46.3012913' },
];

@Injectable({
  providedIn: 'root'
})
export class LocationStoreService {
  locations: Location[] = [...defaultLocations]; 

  constructor() {}

  add(newLocation: Location): void {
    this.locations = [...this.locations, newLocation ];
  }

  remove(location: Location): void {
    this.locations = this.locations.filter(l => l !== location);
  }
}
