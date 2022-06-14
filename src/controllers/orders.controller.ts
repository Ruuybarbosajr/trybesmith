import { NextFunction, Request, Response } from 'express';
import { IOrder, IOrderWithProducts } from '../interfaces/order.interface';
import { IRequestWithUser } from '../interfaces/user.interface';
import OrdersService from '../service/orders.service';

const service = new OrdersService();

export default class {
  private service = service;

  public async getAll(_req: Request, res: Response): Promise<Response<IOrder>> {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  }

  public async create(
    req: IRequestWithUser,
    res: Response, 
    next: NextFunction,
  ): Promise<Response<IOrderWithProducts> | void> {
    const { productsIds } = req.body as IOrderWithProducts;
    try {
      const order = await this.service.create(productsIds, req.user?.id);
      return res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
}