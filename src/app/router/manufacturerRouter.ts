import express from 'express';
const manufacturerController = require('../controllers/manufacturerController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(manufacturerController.getAll));

router.route('/:id')
  .get(controllerHandler(manufacturerController.getOne));

module.exports = router;