import express from 'express';
import ProductsController from '../controllers/products.controller';
import ProductsMiddleware from '../middlewares/products.validate';

const router = express.Router();
const controller = new ProductsController();
const middleware = new ProductsMiddleware();

router.get('/', controller.getAll.bind(controller));

router.post(
  '/',  
  middleware.validateBody.bind(middleware),
  middleware.validateContent.bind(middleware),
  controller.create.bind(controller),
);

export default router;