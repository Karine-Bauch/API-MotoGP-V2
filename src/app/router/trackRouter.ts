import express from 'express';
const trackController = require('../controllers/trackController');
const controllerHanlder = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHanlder(trackController.getAll));

router.route('/:id')
  .get(controllerHanlder(trackController.getOne));

module.exports = router;