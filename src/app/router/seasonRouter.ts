import express from 'express';
const seasonController = require('../controllers/seasonController');

const router = express.Router();

router.route('/')
  .get(seasonController.getAll);

router.route('/:id')
  .get(seasonController.getOne);

router.route('/year/:id')
  .get(seasonController.getByYear);

module.exports = router;