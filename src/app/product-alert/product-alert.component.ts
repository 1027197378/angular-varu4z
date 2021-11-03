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
  @Output() notifys = new EventEmitter<string>(true);
  ngOnInit() {}
  deleteItem(item: Product): void {
    this.products = this.products.filter((a) => a.id != item.id);
    this.notifys.emit(item.name);
  }
  Shopping(item: Product): void {
    this.products.push(item);
  }
}
