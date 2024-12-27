import { CartItem } from "./cart-item.model";

export interface Cart {
    id: string;          // Using string for GUID in TypeScript
    items: CartItem[];
    userId: string;      // Using string for GUID in TypeScript
    price: number;       // Decimal in C# maps to number in TypeScript
}