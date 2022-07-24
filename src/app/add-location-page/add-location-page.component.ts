import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '../location/location';
import { LocationFetcherService } from '../location/location-fetcher.service';
import { LocationStoreService } from './../location/location-store.service';

type State = 'form' | 'loading' | 'complete';

@Component({
  selector: 'app-add-location-page',
  templateUrl: './add-location-page.component.html',
  styleUrls: ['./add-location-page.component.scss']
})
export class AddLocationPageComponent implements OnInit {
  state: State = 'form';
  locationForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private _locationFetcher: LocationFetcherService,
    private _locationStore: LocationStoreService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const name = this.locationForm.value.name;
    if (name == null || name?.trim().length === 0) {
      window.alert('Please insert a valid name.');
      return;
    }

    this.state = 'loading';
    this._locationFetcher
      .getLocation(name)
      .subscribe({
        next: (res) => {  
          if (res == null || res?.length === 0) {
            window.alert('Could not find city.');
            this.state = 'form';
            return;
          }

          // on success
          const responseData = res[0];
          const location: Location = {
            name: responseData.display_name.split(',')[0],
            lat: responseData.lat,
            lon: responseData.lon,
          };
          this._locationStore.add(location);
          // go back to the home page
          this._router.navigate(['/']);
        },

        error: (err) => {
          window.alert(`Could not find city.\nError:${err}`);
          this.state = 'form';
        }
      });
  }
}
