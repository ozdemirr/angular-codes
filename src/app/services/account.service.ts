import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  members = [];

  constructor(private logging: LoggingService) { }

  register(member) {
    this.members.push(member);
    this.logging.log('Saved : ' + member.email);
  }


}
