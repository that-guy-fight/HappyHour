import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specials-component',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
  @Input() location: any;

  constructor() { }

  ngOnInit() {
    const a = this.location;
   }

}
