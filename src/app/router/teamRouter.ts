import express from 'express';
const teamController = require('../controllers/teamController');
const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

router.route('/')
  .get(controllerHandler(teamController.getAll));

router.route('/:id')
  .get(controllerHandler(teamController.getOne));


module.exports = router;