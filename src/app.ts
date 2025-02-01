import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { BicycleRoutes } from './app/modules/bicycles/bicycle.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api', BicycleRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
