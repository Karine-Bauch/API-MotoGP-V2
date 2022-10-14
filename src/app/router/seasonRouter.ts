import express from 'express';

import { seasonController } from '../controllers/seasonController';
import { controllerHandler } from '../helpers/controllerHandler';

const router = express.Router();

router.route('/')
  .get(controllerHandler(seasonController.getAll));

router.route('/:id')
  .get(controllerHandler(seasonController.getOne));

router.route('/year/:id')
  .get(controllerHandler(seasonController.getByYear));

export { router as seasonRouter};