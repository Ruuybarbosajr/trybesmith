import express from 'express';
import ProductsController from '../controllers/products.controller';

const router = express.Router();
const controller = new ProductsController();

router.get('/', controller.getAll.bind(controller));

export default router;