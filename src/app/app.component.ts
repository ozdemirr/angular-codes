import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : []
})

export class AppComponent {

  member = {};

  constructor(private accountService: AccountService) {

  }

  register() {
    this.accountService.register(this.member);
  }

}
