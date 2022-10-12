import express from 'express';
// const seasonController = require('../controllers/seasonController');
import { seasonController } from '../controllers/seasonController';
const controllerHandler = require('../helpers/controllerHandler');
//TODO modify require into import with the good type TS

const router = express.Router();

router.route('/')
  .get(controllerHandler(seasonController.getAll));

router.route('/:id')
  .get(controllerHandler(seasonController.getOne));

router.route('/year/:id')
  .get(controllerHandler(seasonController.getByYear));

export { router as seasonRouter};