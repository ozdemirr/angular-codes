import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private basketService: BasketService) { }

  products = [
    {
      name: 'telefon',
      price: 105,
      id: 10
    },
    {
      name: 'kulaklık',
      price: 30,
      id: 11
    }
  ];

  addToBasket(product) {
    this.basketService.addProduct(product);
  }

}
