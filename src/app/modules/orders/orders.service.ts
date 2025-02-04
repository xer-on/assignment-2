import { TOrder } from "./orders.interface";
import { Order } from "./orders.model";

const createOrderToDB = async (orderData: TOrder) => {
    if (await Order.isOrderExists(orderData.email)) {
        throw new Error('Bicycle already exists');
      }
  const result = await Order.create(orderData);
  return result;
};
export const OrderService = {
    createOrderToDB
}