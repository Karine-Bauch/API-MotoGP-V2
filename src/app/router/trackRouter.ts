import express from 'express';

import { trackController } from '../controllers/trackController';
import { controllerHandler } from '../helpers/controllerHandler';

const router = express.Router();

router.route('/')
  .get(controllerHandler(trackController.getAll));

router.route('/:id')
  .get(controllerHandler(trackController.getOne));

export { router as trackRouter};