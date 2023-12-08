import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-e-product-list',
  templateUrl: './e-product-list.component.html',
  styleUrls: ['./e-product-list.component.css']
})
export class EProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.loadProducts();
  }

  loadProducts(): void{
    this.products = this.productService.getProducts();
  }
}
