import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-enalt',
  templateUrl: './enalt.component.html',
  styleUrls: ['./enalt.component.css'],
  providers: [LoggingService]
})
export class EnaltComponent implements OnInit {

  messages = [];

  constructor(private logging: LoggingService) { }

  ngOnInit() {
    this.messages = this.logging.messages;
  }

}
