import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductAlertComponent } from '../product-alert/product-alert.component';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @ViewChild('shopping') shop!: ProductAlertComponent;
  products = products;
  name: string = '';
  Add(item: Product) {
    this.shop.Shopping(item);
  }
  delete(name: string) {
    alert('子组件删除了' + name);
  }
}
