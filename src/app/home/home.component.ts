import { LocationFetcherService } from './../location/location-fetcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _locationFetcher: LocationFetcherService) { }

  ngOnInit(): void {
    /* 
    this._locationFetcher
      .getLocation('渋谷')
      .subscribe(res => console.log(res));
    */
  }
}
