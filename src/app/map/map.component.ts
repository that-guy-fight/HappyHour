import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagingService } from '../message-service/messaging.service';

declare var google: any;

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnDestroy {
  map: any;
  coordsInfo: any[] = new Array();
  message: any;
  markerSubscription: Subscription;
  coordsInfoSubscription: Subscription;
  currentMarker: any;

  constructor(private messagingService: MessagingService) {
    this.coordsInfoSubscription = this.messagingService.getCoordsInfo().subscribe(
      coordsInfo => {
        this.parseCoords(coordsInfo);
      });

    this.markerSubscription = this.messagingService.getMarker().subscribe(
      marker => {
        this.setMarker(marker);
      });
  }

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    const mapProp = {
      center: new google.maps.LatLng(32.881534, -79.975643),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // tslint:disable-next-line:no-unused-expression
    this.map = new google.maps.Map(document.getElementById('map'), mapProp);
  }

  parseCoords(coordsInfo: any) {
    for (const c of coordsInfo) {
      const coord = {
        locId: c.locId,
        isActive: false,
        marker: new google.maps.Marker({
          position: c.coords,
          map: null
        })
      };
      this.coordsInfo.push(coord);
    }
    const a = this.coordsInfo;
  }

  setMarker(marker: any) {
    if (!!this.currentMarker) {
      this.currentMarker.marker.setMap(null);
    }
    if (marker.isActive) {
      this.currentMarker = this.coordsInfo.filter(c => c.locId === marker.locId)[0];
      this.currentMarker.marker.setMap(this.map);
    }
  }

  ngOnDestroy() {
    this.markerSubscription.unsubscribe();
    this.coordsInfoSubscription.unsubscribe();
  }

}
