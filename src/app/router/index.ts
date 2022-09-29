import express from 'express';
const riderRouter = require('./riderRouter');
const raceRouter = require('./raceRouter');

const router = express.Router();

router.all('/', (req, res) => { res.send('page accueil') });

router.use('/riders', riderRouter);

router.use('/races', raceRouter);

// router.use('/*', () => {
//   console.log('Error 404: API route not found');
// })

export default router;

