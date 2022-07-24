import { Injectable } from '@angular/core';  
import { Location } from './location';

const defaultLocations: Location[] = [
  { name: 'Paranapiacaba', subtitle: 'Santo André', lat: '-23.7778474', lon: '-46.3012913' },
  { name: 'Shibuya', subtitle: 'Tóquio', lat: '35.6645956', lon: '139.6987107' },
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
