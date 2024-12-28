import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {

  orders!:Order[];

  constructor(private http:HttpClient) {
    this.getOrder();
  }

  getOrder(){
    this.http.get<Order[]>(environment.orderApiUrl+"/"+environment.tempUserId).subscribe({
      next: (response: Order[]) => {
        this.orders = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }



}
