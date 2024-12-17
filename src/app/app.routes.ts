import { Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';

export const routes: Routes = [
    { path:'' , component: ProductListComponent, pathMatch: 'full' },
    { path:'products' , component: ProductListComponent},
    { path:'cart' , component: CartComponent},
    { path:'orders' , component: OrderListComponent},
];
