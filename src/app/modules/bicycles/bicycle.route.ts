import express from 'express';
import { BicycleControllers } from './bicycle.controller';

const router = express.Router();
//will call controller function

// post route to create a new bicycle product
router.post('/products', BicycleControllers.createBicycle);
router.get('/products', BicycleControllers.getAllBicycles);
router.get('/products/:id', BicycleControllers.getSingleBicycle);
router.put('/products/:id', BicycleControllers.updateBicycle);
router.delete('/products/:id', BicycleControllers.deleteBicycle);

export const BicycleRoutes = router;
