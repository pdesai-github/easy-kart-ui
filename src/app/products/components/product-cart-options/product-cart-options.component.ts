import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-cart-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cart-options.component.html',
  styleUrl: './product-cart-options.component.scss'
})
export class ProductCartOptionsComponent {

  @Input() product!: Product;

  constructor(private httpClient: HttpClient) { }

  addItemToCart(product: any, quantity: number) {
    this.httpClient.post(`${environment.addCartUrl}/AddItemToCartAsync`, { product, quantity }).subscribe({
      next: (response: any) => {
        alert('Item added to cart');
      },
      error: (error: any) => {
        alert('Error adding item to cart');
      }
    });
  }

}
