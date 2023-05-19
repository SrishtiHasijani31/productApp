import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product-service.service';
import { Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private http: HttpClient
  ) {}
  

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get formControls() {
    return this.productForm.controls;
  }

  addProduct(product: any) {
    const token = localStorage.getItem('token'); // Retrieve the token from storage (update this based on your implementation)
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Include the token in the headers
  
    this.http.post('http://localhost:3000/api/products', product, { headers })
      .subscribe(
        response => {
          console.log('Product added successfully:', response);
          this.router.navigate(['/products']);
          // Handle success, e.g., show a success message, redirect, etc.
        },
        error => {
          console.error('Error adding product:', error);
          // Handle error, e.g., show an error message, handle specific error cases, etc.
        }
      );
  }
}  