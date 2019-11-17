import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket = [];

  basketUpdated = new EventEmitter<number>();

  constructor() { }

  addProduct(product) {
    this.basket.push(product);
    this.basketUpdated.emit(this.basket.length);
  }

}
