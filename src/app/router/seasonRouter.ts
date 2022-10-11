import express from 'express';
const seasonController = require('../controllers/seasonController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(seasonController.getAll));

router.route('/:id')
  .get(controllerHandler(seasonController.getOne));

router.route('/year/:id')
  .get(controllerHandler(seasonController.getByYear));

module.exports = router;