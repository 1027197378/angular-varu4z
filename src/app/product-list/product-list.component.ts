import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductAlertComponent } from '../product-alert/product-alert.component';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // @ViewChild('alert1') alert?: ProductAlertComponent;
  products = products;
  name: string = '';
  share() {
    // window.alert('子组件调用父组件方法');
  }
  Add() {
    // let ms = this.alert.Child('faaaaaa');
    // alert(ms);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
