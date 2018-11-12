import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private coordsInfoSubject = new Subject<any>();
  private markerSubject = new Subject<any>();

  constructor() { }

  sendCoordsInfo(coordsInfo: any) {
    this.coordsInfoSubject.next(coordsInfo);
  }

  clearCoordsInfo() {
    this.coordsInfoSubject.next();
  }

  getCoordsInfo(): Observable<any> {
    return this.coordsInfoSubject.asObservable();
  }

  setMarker(marker: any) {
    this.markerSubject.next(marker);
  }

  clearMarker() {
    this.markerSubject.next();
  }

  getMarker(): Observable<any> {
    return this.markerSubject.asObservable();
  }
}
