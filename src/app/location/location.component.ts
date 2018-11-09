import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagingService } from '../message-service/messaging.service';

@Component({
  selector: 'app-location-component',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {
  @Input() location: any;
  message: any;
  subscription: Subscription;

  constructor(private messagingService: MessagingService) {
    this.subscription = this.messagingService.getMessage().subscribe(
      message => {
        this.message = message;
      });
  }

  ngOnInit() {
    const a = this.location;
   }

  setMarker() {
    const coords = this.location.address.coordinates;
    this.sendMessage({Lat: coords.lat, lng: coords.Lng});
  }

  sendMessage(coords: any) {
    this.messagingService.sendMessage(coords);
  }

  clearMessage(): void {
    // clear message
    this.messagingService.clearMessage();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
