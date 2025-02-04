import express from 'express';
import { OrdersControllers } from './orders.controllers';
const router = express.Router()

router.post('/orders', OrdersControllers.createOrder)

export const OrdersRoutes = router;