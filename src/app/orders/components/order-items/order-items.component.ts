import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Product } from '../../../products/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from "../../../products/components/product-tile/product-tile.component";

@Component({
  selector: 'app-order-items',
  standalone: true,
  imports: [CommonModule, ProductTileComponent],
  templateUrl: './order-items.component.html',
  styleUrl: './order-items.component.scss'
})
export class OrderItemsComponent implements OnInit {
  @Input() order!:Order;
  products:Product[] = [];
  productIds:string[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.order.items.forEach(item => {
      this.productIds.push(item.productId);
    });
    this.http.post<Product[]>(environment.productapi+"/byGuids", this.productIds).subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  getQuantity(productId:string):number | undefined {
    return this.order.items.find(item => item.productId == productId)?.quantity;
  }

}
