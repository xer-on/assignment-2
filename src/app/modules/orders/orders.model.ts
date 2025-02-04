import mongoose from 'mongoose';
import { OrderModel, TOrder } from './orders.interface';

const orederShema = new mongoose.Schema<TOrder>({
  email: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
  updatedAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

orederShema.statics.isOrderExists = async function (email: string) {
  const existingOrder = await this.findOne({ email });
  return !!existingOrder;
};
export const Order = mongoose.model<TOrder, OrderModel>('Order', orederShema);
