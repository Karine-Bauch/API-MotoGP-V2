import express from 'express';

import { manufacturerController } from '../controllers/manufacturerController';
import { controllerHandler } from '../helpers/controllerHandler';

const router = express.Router();

router.route('/')
  .get(controllerHandler(manufacturerController.getAll));

router.route('/:id')
  .get(controllerHandler(manufacturerController.getOne));

export { router as manufacturerRouter};