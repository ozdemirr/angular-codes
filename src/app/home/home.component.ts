import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

  constructor(private router: Router) {

  }

  queryParamsLink() {
    this.router.navigate(['/product', 0], {queryParams: {addToBasket: true}} );
  }

}
