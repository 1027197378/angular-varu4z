import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from './cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit() {}
  count() {
    let price: number = 0;
    this.cartService.items.forEach((a) => {
      price = price + a.price;
    });
    return price;
  }
  clear() {
    this.cartService.clear();
  }
  delete(index: number) {
    this.cartService.items.splice(index, 1);
  }
}
