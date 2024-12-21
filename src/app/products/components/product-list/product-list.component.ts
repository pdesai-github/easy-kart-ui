import { HttpClient } from '@angular/common/http';
import { Component, Signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductListServiceService } from '../../services/product-list-service/product-list-service.service';
import { ImageLoaderComponent } from "../../../shared/components/image-loader/image-loader.component";
import { ProductTileComponent } from "../product-tile/product-tile.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductTileComponent],
  providers: [ProductListServiceService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Signal<Product[]>

  constructor(private http: HttpClient, private productListServiceService: ProductListServiceService) {
    this.products = this.productListServiceService.products$;
  }

  ngOnInit(): void {
    this.productListServiceService.getProducts();
  }

}
