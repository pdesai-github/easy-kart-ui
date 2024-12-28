import { Component } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '../../../shared/components/image-loader/image-loader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart!:Cart;

  constructor(private http:HttpClient, private router:Router) {
    this.getCart();
  }

  getCart(){
    this.http.get<Cart>(environment.addCartUrl+"/"+environment.tempUserId).subscribe({
      next: (response: Cart) => {
        this.cart = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  checkout(){
    
    this.http.post(environment.orderApiUrl, this.cart).subscribe({
      next: (response: any) => {
        console.log(response);
        this.emptyCart()
        this.router.navigate(['/orders']);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  emptyCart() {
    this.http.delete(environment.addCartUrl + "/" + environment.tempUserId).subscribe({
      next: (response: any) => {
        console.log(response);
        
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
