import express from 'express';
const raceController = require('../controllers/raceController');

const router = express.Router();

router.route('/')
  .get(raceController.getAll);


router.route('/:id')
  .get(raceController.getOne);


module.exports = router;