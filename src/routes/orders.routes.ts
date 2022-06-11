import express from 'express';
import OrdersController from '../controllers/orders.controller';

const controller = new OrdersController();
const router = express.Router();

router.get('/', controller.getAll.bind(controller));

export default router;