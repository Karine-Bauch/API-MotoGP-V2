import express from 'express';
const trackController = require('../controllers/trackController');

const router = express.Router();

router.route('/')
  .get(trackController.getAll);

router.route('/:id')
  .get(trackController.getOne);

module.exports = router;