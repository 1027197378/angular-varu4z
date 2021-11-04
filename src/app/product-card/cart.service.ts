import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  add(product: Product) {
    this.items.push(product);
  }
  delete(index: number) {
    this.items.splice(index, 1);
  }
  getCards() {
    return this.items;
  }
  clear() {
    this.items = [];
  }
}
