import { Request, Response } from 'express';
import OrdersService from '../service/orders.service';

const service = new OrdersService();

export default class {
  private service = service;

  public async getAll(_req: Request, res: Response) {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  }
}