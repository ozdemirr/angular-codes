import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  @Input() product;

  @Output() addedToBasket = new EventEmitter<{}>();

  addToBasket(product) {
    this.addedToBasket.emit({
        product
    });
  }

  constructor() { }

  ngOnInit() {
  }
 
}
