import express from 'express';
const teamController = require('../controllers/teamController');

const router = express.Router();

router.route('/')
  .get(teamController.getAll);

router.route('/:id')
  .get(teamController.getOne);


module.exports = router;