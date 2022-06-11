import express, { NextFunction, Request, Response } from 'express';
import IError from './interfaces/error.interface';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.products);
app.use('/users', routes.users);
app.use('/orders', routes.orders);

app.use((
  error: IError,
  _req: Request, 
  res: Response, 
  _next: NextFunction,
): Response<IError> => {
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: error.message });
});

export default app;
