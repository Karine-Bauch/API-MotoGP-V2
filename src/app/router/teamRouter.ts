import express from 'express';

import { teamController } from '../controllers/teamController';
import { controllerHandler } from '../helpers/controllerHandler';

const router = express.Router();

router.route('/')
  .get(controllerHandler(teamController.getAll));

router.route('/:id')
  .get(controllerHandler(teamController.getOne));


export { router as teamRouter};