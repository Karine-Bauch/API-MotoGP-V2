import express from 'express';
// const manufacturerController = require('../controllers/manufacturerController');
import { manufacturerController } from '../controllers/manufacturerController';
const controllerHandler = require('../helpers/controllerHandler');
// import { controllerHandler } from '../helpers/controllerHandler';

const router = express.Router();

router.route('/')
  .get(controllerHandler(manufacturerController.getAll));

router.route('/:id')
  .get(controllerHandler(manufacturerController.getOne));

export { router as manufacturerRouter};