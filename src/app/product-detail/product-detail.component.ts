import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../product-card/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public products: Product[] = products;
  public product: Product | any;
  constructor(
    private router: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.product = this.products.find((a) => a.id == id);
  }
  buy() {
    this.cartService.add(this.product);
  }
}
