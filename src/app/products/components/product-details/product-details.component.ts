import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../../models/product-details.model';
import { ProductListServiceService } from '../../services/product-list-service/product-list-service.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ImageLoaderComponent } from '../../../shared/components/image-loader/image-loader.component';
import { ProductCartOptionsComponent } from "../product-cart-options/product-cart-options.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent, ProductCartOptionsComponent],
  providers: [ProductListServiceService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  productDetails: Signal<ProductDetails | null>;
  product: Signal<Product | null>;

  constructor(private activatedRoutes: ActivatedRoute, private productListServiceService: ProductListServiceService) {
    this.productDetails = this.productListServiceService.productDetails$;
    this.product = this.productListServiceService.product$;
  }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params => {
      console.log(params['id']);
      console.log(params['catid']);
      this.productListServiceService.getProduct(params['id'], params['catid']);
      this.productListServiceService.getProductDetails(params['id']);
    });
  }

  getTechnicalDetailsList(productDetails:ProductDetails): { property: string, value: string }[] {
    const details: { property: string, value: string }[] = [];
    for (const [property, value] of Object.entries(productDetails.technicalDetails)) {
      details.push({ property, value });
    }
    return details;
  }

  getAdditionalDetailsList(productDetails:ProductDetails): { property: string, value: string }[] {
    const details: { property: string, value: string }[] = [];
    for (const [property, value] of Object.entries(productDetails.aditionalDetails)) {
      details.push({ property, value });
    }
    return details;
  }

  getAttributeDetailsList(productDetails:ProductDetails): { property: string, value: string }[] {
    const details: { property: string, value: string }[] = [];
    for (const [property, value] of Object.entries(productDetails.technicalDetails)) {
      details.push({ property, value });
    }
    return details;
  }

}
