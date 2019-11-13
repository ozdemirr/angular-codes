import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [LoggingService]
})
export class AppComponent implements OnInit {

  messages = [];

  constructor(private logging: LoggingService) {

  }

  ngOnInit() {
    this.messages = this.logging.messages;
  }

  addMessage() {
    this.logging.addMessage();
  }


}
