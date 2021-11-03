import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  name: string = '';
  delete(name: string) {
    alert('子组件删除了' + name);
  }
}
