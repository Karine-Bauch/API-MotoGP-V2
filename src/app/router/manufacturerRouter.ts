import express from 'express';
const manufacturerController = require('../controllers/manufacturerController');

const router = express.Router();

router.route('/')
  .get(manufacturerController.getAll);

router.route('/:id')
  .get(manufacturerController.getOne);

module.exports = router;