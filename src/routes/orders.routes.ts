import express from 'express';
import OrdersController from '../controllers/orders.controller';
import OrdersMiddleware from '../middlewares/orders.validate';
import TokenMiddleware from '../middlewares/token.validate';

const controller = new OrdersController();
const tokenMiddleware = new TokenMiddleware();
const validateMiddleware = new OrdersMiddleware();
const router = express.Router();

router.get('/', controller.getAll.bind(controller));

router.post(
  '/', 
  tokenMiddleware.validateToken.bind(tokenMiddleware),
  validateMiddleware.validateBody.bind(validateMiddleware),
  validateMiddleware.validateContent.bind(validateMiddleware),
  controller.create.bind(controller),
);

export default router;