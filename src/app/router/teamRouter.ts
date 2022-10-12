import express from 'express';
// const teamController = require('../controllers/teamController');
import { teamController } from '../controllers/teamController';
const controllerHandler = require('../helpers/controllerHandler');
//TODO modify require into import with the good type TS

const router = express.Router();

router.route('/')
  .get(controllerHandler(teamController.getAll));

router.route('/:id')
  .get(controllerHandler(teamController.getOne));


export { router as teamRouter};