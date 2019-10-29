import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products = [
    {
      name: 'Blue purple bouquet',
      designedBy : 'Kadir',
      id: 128379
    },
    {
      name: 'BRose',
      designedBy : 'Beyazlı',
      id: 958318
    }
  ];

  name = 'Çiçek kategorisi';

  onAddedToBasket(product) {
      alert(product.name + ' sepete eklendi');
  }

  constructor() { }

  ngOnInit() {
  }

}
