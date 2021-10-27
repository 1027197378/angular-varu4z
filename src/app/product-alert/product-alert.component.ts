import { AnimateTimings } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [];
  }
  @Input() product!: Product;
  @Output() notifys = new EventEmitter(true);
  ngOnInit() {}
  deleteItem(): void {
    this.notifys.emit();
  }
  AddItem(item: Product): void {
    this.products.push(item);
  }
}
