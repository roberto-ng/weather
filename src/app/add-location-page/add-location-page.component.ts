import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-location-page',
  templateUrl: './add-location-page.component.html',
  styleUrls: ['./add-location-page.component.scss']
})
export class AddLocationPageComponent implements OnInit {
  locationForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    window.alert(this.locationForm.value.name);
  }
}
