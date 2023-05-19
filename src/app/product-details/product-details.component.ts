import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId)
      .subscribe((product: any) => {
        this.product = product;
        this.isLoading = false;
      });
  }
}
