import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-component',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: any;

  constructor() {
    this.locations = require('../../data/locations.json').Locations;
    console.log(this.locations);
  }

  ngOnInit() {
  }

}
