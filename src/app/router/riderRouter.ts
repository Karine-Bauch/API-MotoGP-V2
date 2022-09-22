import express from 'express';
const riderController = require('../controllers/riderController');

const router = express.Router();

router.route('/')
  .get(riderController.getAll);


router.route('/:id')
  .get(riderController.getOne);

router.route('/number/:id')
  .get(riderController.getByNumber);

module.exports = router;