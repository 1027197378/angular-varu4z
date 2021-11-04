import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from './cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  items: Product[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getCards();
  }
  count() {
    let price: number = 0;
    this.items.forEach((a) => {
      price = price + a.price;
    });
    return price;
  }
}
