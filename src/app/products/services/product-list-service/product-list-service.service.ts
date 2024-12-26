import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ProductDetails } from '../../models/product-details.model';

@Injectable()
export class ProductListServiceService {

  products = signal<Product[]>([]);
  products$ = this.products.asReadonly();

  productDetails = signal<ProductDetails | null>(null);
  productDetails$ = this.productDetails.asReadonly();

  product = signal<Product | null>(null); 
  product$ = this.product.asReadonly();

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

  public getProductDetails(productId: string): void {
    const apiUrl = `${environment.productDetailsApi}/${productId}`; // Replace with your actual API endpoint

    this.http.get<ProductDetails>(apiUrl).subscribe(
      (data) => {
        this.productDetails.update(() => data);
      },
      (error) => {
        console.error('Error fetching product details', error);
      }
    );
  }

  public getProduct(productId: string, categoryId: string) {
    const apiUrl = `${environment.productapi}/${productId}/${categoryId}`; // Replace with your actual API endpoint

    this.http.get<Product>(apiUrl).subscribe({
      next: (data) => {
        this.product.update(() => data);
      },
      error: (error) => {
        console.error('Error fetching product details', error);
      }
    });
  }

}
