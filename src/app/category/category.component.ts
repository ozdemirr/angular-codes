import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products = [
    {
      name: 'Blue-purple bouquet',
      designedBy : 'Kadir'
    },
    {
      name: 'Amsterdam Roses',
      designedBy : 'Beyazlı'
    }
  ];

  name = 'Çiçek kategorisi';

  constructor() { }

  ngOnInit() {
  }

}
