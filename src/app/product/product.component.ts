import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  product: object;

  products = [
    {
      id: 0,
      name : 'telefon'
    },
    {
      id: 1,
      name : 'tablet'
    }
  ];
  addBasketDegeri: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.product = this.products[this.id];

    if(this.route.snapshot.queryParams.addToBasket) {
      //sepete ekleme işlemleri
      this.addBasketDegeri = this.route.snapshot.queryParams.addToBasket;

      alert('sepete eklendi');

    }

  }

}
