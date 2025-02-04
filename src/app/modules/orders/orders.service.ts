import BiCycle from '../bicycles/bicycle.model';
import { TOrder } from './orders.interface';
import { Order } from './orders.model';

const createOrderAndUpdateProducts = async (orderData: TOrder) => {
  if (await Order.isOrderExists(orderData.email)) {
    throw new Error('Order already exists');
  }

  const product = await BiCycle.findOne({ _id: orderData.product });
  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity === 0) {
    product.inStock = false;
    await product.save();
    throw new Error('Product is out of stock');
  }

  if (product.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity');
  }

  product.quantity -= orderData.quantity;
  await product.save();
  const result = await Order.create(orderData);
  return result;
};
export const OrderService = {
  createOrderAndUpdateProducts,
};
