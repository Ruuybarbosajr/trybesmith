import { Request, Response } from 'express';
import IProduct from '../interfaces/product.interface';
import ProductsService from '../service/products.service';

export default class {
  private service = new ProductsService();

  async getAll(_req: Request, res: Response): Promise<Response<IProduct[]>> {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  }
}