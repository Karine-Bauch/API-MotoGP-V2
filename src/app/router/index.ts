import express from 'express';
const pilotController = require('../controllers/pilotController');

const router = express.Router();

router.all('/', () => { console.log('page accueil') });

router.use('/pilots', pilotController.getAll);

router.use(() => {
  console.log('Error 404: API route not found');
})

export default router;

