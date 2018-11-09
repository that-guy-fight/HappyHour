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
    this.sendMapInfo();
  }

  ngOnInit() { }

  sendMapInfo() {
    const mapInfo = this.prepMapInfo();
    this.messagingService.sendMapInfo(mapInfo);
  }

  prepMapInfo(): any {
    // TODO: parse locations.json and make an object to send to the map component

  }
}
