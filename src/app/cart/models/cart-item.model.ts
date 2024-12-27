import { Product } from "../../products/models/product.model";

export interface CartItem {
    product: Product;
    quantity: number;
}