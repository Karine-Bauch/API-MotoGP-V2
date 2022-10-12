import express from 'express';
// const riderController = require('../controllers/riderController');
import { riderController } from '../controllers/riderController';
const controllerHandler = require('../helpers/controllerHandler');
//TODO modify require into import with the good type TS

const router = express.Router();

router.route('/')
  .get(controllerHandler(riderController.getAll));


router.route('/:id')
  .get(controllerHandler(riderController.getOne));

export { router as riderRouter};