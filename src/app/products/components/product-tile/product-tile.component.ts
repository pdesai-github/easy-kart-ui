import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImageLoaderComponent } from '../../../shared/components/image-loader/image-loader.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [ImageLoaderComponent, CommonModule, RouterModule],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {

  @Input() product!: Product;
  @Input() quantity!: number | undefined;

  @Input() height: string = '120px'; // Default height
  @Input() width: string = '100px';  // Default width

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
