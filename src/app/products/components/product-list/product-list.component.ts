import { HttpClient } from '@angular/common/http';
import { Component, Signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductListServiceService } from '../../services/product-list-service/product-list-service.service';
import { ImageLoaderComponent } from "../../../shared/components/image-loader/image-loader.component";
import { ProductTileComponent } from "../product-tile/product-tile.component";
import { Category } from '../../models/category.model';
import { environment } from '../../../../environments/environment';
import { GroupProducts } from '../../models/group-products.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductTileComponent],
  providers: [ProductListServiceService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products!: Product[];
  categories!: Category[];
  isLoaded = false;
  groupedProducts: GroupProducts[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();

  }

  // get categories from api
  getCategories(): void {
    this.http.get<Category[]>(environment.categoryapi).subscribe((categories) => {
      this.categories = categories;
      this.groupProducts();
      this.isLoaded = true;
    });
  }

  public getProducts(): void {
    const apiUrl = environment.productapi; // Replace with your actual API endpoint

    this.http.get<Product[]>(apiUrl).subscribe(
      (data) => {
        this.products = data;
        this.getCategories();
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  groupProducts(): void {
    this.groupedProducts = this.categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        products: this.products.filter((product) => product.category === category.id),
      }
    });
  }

  getProdcutsByCategory(categoryId: string): Product[] {
    console.log('categoryId', categoryId);
    return this.products.filter((product) => product.category === categoryId);
  }

}
