import express from 'express';
// const trackController = require('../controllers/trackController');
import { trackController } from '../controllers/trackController';
const controllerHanlder = require('../helpers/controllerHandler');
//TODO modify require into import with the good type TS

const router = express.Router();

router.route('/')
  .get(controllerHanlder(trackController.getAll));

router.route('/:id')
  .get(controllerHanlder(trackController.getOne));

export { router as trackRouter};