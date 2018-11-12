import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MapComponent } from './map/map.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './location/location.component';
import { SpecialsComponent } from './specials/specials.component';

import { MessagingService } from './message-service/messaging.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MapComponent,
    LocationsComponent,
    LocationComponent,
    SpecialsComponent,
  ],
  imports: [
    BrowserModule,
    AngularSplitModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
