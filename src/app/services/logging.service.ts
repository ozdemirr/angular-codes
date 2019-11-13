import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages = [
    'mesaj 1',
    'mesaj 2'
  ];

  constructor() {
  }

  addMessage() {
    this.messages.push('yeni bir mesaj');
  }

}
