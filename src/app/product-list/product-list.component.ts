import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: any[]; // Update the type based on your product model

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        // Handle error appropriately
        console.error('Error fetching products', error);
      }
    );
}
}