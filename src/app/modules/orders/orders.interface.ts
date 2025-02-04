import { Model } from "mongoose";

export type TOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
};

export interface OrderModel extends Model<TOrder> {
    isOrderExists(email: string): Promise<boolean>;
  }