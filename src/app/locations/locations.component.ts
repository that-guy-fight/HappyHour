import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../message-service/messaging.service';
import { Locations } from '../shared/locations';

@Component({
  selector: 'app-locations-component',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit {
  locations: any;

  constructor(private messagingService: MessagingService) {
    const json = require('../../data/locations.json').Locations;
    this.locations = new Locations(json);
  }

  ngOnInit() {
    this.sendLocationsCoords();
  }

  sendLocationsCoords() {
    const coordsList = this.prepMapInfo();
    this.messagingService.sendCoordsInfo(coordsList);
  }

  prepMapInfo(): any {
    const coordsList = new Array();
    for (const location of this.locations.locations) {
      coordsList.push({
        locId: location.locId,
        coords: location.address.coordinates
      });
    }
    return coordsList;
  }
}
