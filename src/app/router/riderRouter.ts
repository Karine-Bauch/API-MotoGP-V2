import express from 'express';

import { riderController } from '../controllers/riderController';
import { controllerHandler } from '../helpers/controllerHandler';

const router = express.Router();

router.route('/')
  .get(controllerHandler(riderController.getAll));


router.route('/:id')
  .get(controllerHandler(riderController.getOne));

export { router as riderRouter};