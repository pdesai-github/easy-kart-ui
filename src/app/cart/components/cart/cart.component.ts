import { Component } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '../../../shared/components/image-loader/image-loader.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart!:Cart;

  constructor(private http:HttpClient){
    this.getCart();
  }

  getCart(){
    this.http.get<Cart>(environment.addCartUrl+"/d8e1c062-4d3e-4326-9f16-31b28f62a4c5").subscribe({
      next: (response: Cart) => {
        this.cart = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  checkout(){
    
  }

}
