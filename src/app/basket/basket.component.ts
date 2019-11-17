import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  payment() {
    this.router.navigate(['payment'], {relativeTo: this.route});
  }

}
