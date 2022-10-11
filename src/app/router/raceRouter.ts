import express from 'express';
const raceController = require('../controllers/raceController');
const controllerHandler = require('../helpers/controllerHandler')

const router = express.Router();

router.route('/')
  .get(controllerHandler(raceController.getAll));

router.route('/:id')
  .get(controllerHandler(raceController.getOne));

module.exports = router;