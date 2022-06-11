import { NextFunction, Request, Response } from 'express';
import { IProduct, INewProduct } from '../interfaces/product.interface';
import ProductsService from '../service/products.service';

export default class {
  private service = new ProductsService();

  async getAll(_req: Request, res: Response): Promise<Response<IProduct[]>> {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  }

  async create(
    req: Request,
    res: Response, 
    next: NextFunction,
  ): Promise<Response<Omit<IProduct, 'orderId'>> | void> {
    const { name, amount } = req.body as INewProduct;
    try {
      const newProduct = await this.service.create({ name, amount });
      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
}