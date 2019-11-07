import { Component, OnInit, OnChanges, Input, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alt',
  templateUrl: './alt.component.html',
  styleUrls: ['./alt.component.css']
})
export class AltComponent implements OnInit, OnChanges, OnDestroy {

  hooks = [];
  changes: SimpleChanges;
  @Input() ornek: string ;

  constructor() {
    this.hooks.push('constructor tetiklendi');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.hooks.push('ngOnChanges tetiklendi');
    this.changes = changes;
    console.log(changes);
  }

  ngOnInit() {
    this.hooks.push('ngOnInit tetiklendi');
  }

  ngOnDestroy() {
    alert('güle güle');
  }

}
