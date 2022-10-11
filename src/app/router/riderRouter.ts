import express from 'express';
const riderController = require('../controllers/riderController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(riderController.getAll));


router.route('/:id')
  .get(controllerHandler(riderController.getOne));

module.exports = router;