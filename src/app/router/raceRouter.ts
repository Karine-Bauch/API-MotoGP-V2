import express from 'express';
// const raceController = require('../controllers/raceController');
import { raceController } from '../controllers/raceController';
const controllerHandler = require('../helpers/controllerHandler');
//TODO modify require into import with the good type TS

const router = express.Router();

router.route('/')
  .get(controllerHandler(raceController.getAll));

router.route('/:id')
  .get(controllerHandler(raceController.getOne));

export { router as raceRouter};