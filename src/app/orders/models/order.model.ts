import { OrderItem } from "./order-item.model";

export interface Order {
  id: string; // Guid as string
  items: OrderItem[];
  userId: string; // Guid as string
  price: number;
  createdDate: Date;
  status?: string;
}