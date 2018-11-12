import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessagingService } from '../message-service/messaging.service';

@Component({
  selector: 'app-location-component',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {
  @Input() location: any;
  messageService: any;
  message: any;
  subscription: Subscription;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() { }

  setMarker() {
    const panel = document.getElementById('location_' + this.location.locId);
    const isActive = !panel.classList.contains('in');
    this.messagingService.setMarker({ locId: this.location.locId, isActive: isActive });
  }

  clearMarker(): void {
    // clear message
    this.messagingService.clearMarker();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
