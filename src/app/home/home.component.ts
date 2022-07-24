import { Component, OnInit } from '@angular/core';
import { Location } from '../location/location';
import { LocationStoreService } from './../location/location-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private _locationStore: LocationStoreService,
  ) { }

  ngOnInit(): void { }

  get locations(): Location[] {
    return this._locationStore.locations;
  }
}
