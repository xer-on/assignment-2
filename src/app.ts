import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { BicycleRoutes } from './app/modules/bicycles/bicycle.route';
import { OrdersRoutes } from './app/modules/orders/orders.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api', BicycleRoutes);
app.use('/api', OrdersRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
