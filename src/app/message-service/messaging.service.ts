import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private subject = new Subject<any>();

  constructor() { }

  sendMapInfo(mapInfo: any) {
    this.subject.next({ mapInfo: mapInfo });
  }

  clearMapInfo() {
    this.subject.next();
  }

  getMapInfo(): Observable<any> {
    return this.subject.asObservable();
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
