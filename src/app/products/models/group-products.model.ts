import { Product } from "./product.model";

export interface GroupProducts {
    id: string;
    name: string;
    products: Product[];
}