import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

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
    new google.maps.Map(document.getElementById('gmap'), mapProp);

  }

}
