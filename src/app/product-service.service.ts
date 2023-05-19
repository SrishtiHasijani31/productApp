import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  addProduct(name: string, price: number): Observable<Product> {
    const url = `${this.apiUrl}/products`;
    const product: Product = { name: name, price: price };
    console.log("name====",name)

    const requestBody = JSON.stringify(product);
    
    // Then in your HTTP request:
    return this.http.post<Product>(url, requestBody, { headers: { 'Content-Type': 'application/json' } });
    
  }

  getProductById(id: string | null): Observable<Product> {
    const url = `${this.apiUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }
}
