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
  mapInfo: any;
  message: any;
  subscription: Subscription;
  marker: any;

  constructor(private messagingService: MessagingService) {
    this.subscription = this.messagingService.getMapInfo().subscribe(
      message => {
        this.mapInfo = message.mapInfo;
      });

    this.subscription = this.messagingService.getMessage().subscribe(
      message => {
        const coords = this.parseCoords(message.text);
        this.setMarker(coords);
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

  setMarker(coords) {
    this.marker = new google.maps.Marker({
      position: coords,
      map: this.map
    });
  }

  parseCoords(messageText: any): any {
    const lat = parseFloat(messageText.Lat);
    const lng = parseFloat(messageText.Lng);
    return { lat: lat, lng: lng };
  }

  sendMessage(): void {
    this.messagingService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
    this.messagingService.clearMessage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
