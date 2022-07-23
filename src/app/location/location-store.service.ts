import { Injectable } from '@angular/core';  
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationStoreService {
  locations: Location[] = []; 

  constructor() {}

  add(newLocation: Location): void {
    this.locations = [...this.locations, newLocation ];
  }

  remove(location: Location): void {
    this.locations = this.locations.filter(l => l !== location);
  }
}
