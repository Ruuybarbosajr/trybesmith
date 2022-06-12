import express from 'express';
import LoginControllers from '../controllers/login.controller';
import LoginMiddleware from '../middlewares/login.validate';

const router = express.Router();
const controller = new LoginControllers();
const middleware = new LoginMiddleware();

router.post(
  '/', 
  middleware.validadeBody.bind(middleware),
  controller.login.bind(controller),
);

export default router;
