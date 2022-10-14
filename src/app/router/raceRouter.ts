import express from 'express';

import { raceController } from '../controllers/raceController';
import { controllerHandler } from '../helpers/controllerHandler';
const router = express.Router();

router.route('/')
  .get(controllerHandler(raceController.getAll));

router.route('/:id')
  .get(controllerHandler(raceController.getOne));

export { router as raceRouter};