import { Request, Response } from 'express';
import { OrderService } from './orders.service';
import { OrderValidation } from './orders.validation';
const createOrder = async (req: Request, res: Response) => {
  try {
    const zodParsedData = OrderValidation.createOrderZodSchema.parse(req.body);
    const orderData = {
      ...zodParsedData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Create order and update product quantities in a transaction
    const order = await OrderService.createOrderAndUpdateProducts(orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error: error,
    });
  }
};

export const OrdersControllers = {
  createOrder,
};
