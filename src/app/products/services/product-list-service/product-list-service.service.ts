import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductListServiceService {

  products = signal<Product[]>([]);
  products$ = this.products.asReadonly();

  constructor(private http: HttpClient) { }

  public getProducts(): void {
    const apiUrl = environment.productapi; // Replace with your actual API endpoint

    this.http.get<Product[]>(apiUrl).subscribe(
      (data) => {
        this.products.update(() => data);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

}
