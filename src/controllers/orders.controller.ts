import { Request, Response } from 'express';
import { IOrder } from '../interfaces/order.interface';
import OrdersService from '../service/orders.service';

const service = new OrdersService();

export default class {
  private service = service;

  public async getAll(_req: Request, res: Response): Promise<Response<IOrder>> {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  }
}