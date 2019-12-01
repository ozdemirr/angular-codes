import { Component } from '@angular/core';

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

}
