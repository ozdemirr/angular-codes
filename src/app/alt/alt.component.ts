import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-alt',
  templateUrl: './alt.component.html',
  styleUrls: ['./alt.component.css']
})
export class AltComponent implements OnInit {

  messages = [];

  constructor(private logging: LoggingService) { }

  ngOnInit() {
    this.messages = this.logging.messages;
  }

}
