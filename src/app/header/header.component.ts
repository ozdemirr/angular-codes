import { Component } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  basketCount: number;

  constructor(private basketService: BasketService) {
    this.basketService.basketUpdated.subscribe(
      (count: number) => this.basketCount = count
    );
  }

}
