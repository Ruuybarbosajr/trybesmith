import express from 'express';
import UsersController from '../controllers/users.controller';
import UsersMiddleware from '../middlewares/users.validate';

const controller = new UsersController();
const middleware = new UsersMiddleware();

const router = express.Router();

router.post(
  '/',
  middleware.validateBody.bind(middleware),
  middleware.validateContent.bind(middleware),
  controller.create.bind(controller),
);

export default router;