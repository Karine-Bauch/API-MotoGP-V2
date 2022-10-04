import express from 'express';
const riderRouter = require('./riderRouter');
const raceRouter = require('./raceRouter');
const trackRouter = require('./trackRouter');
const teamRouter = require('./teamRouter');
const seasonRouter = require('./seasonRouter');
const manufacturerRouter = require('./manufacturerRouter');

const router = express.Router();

router.all('/', (req, res) => { res.send('page accueil') });

router.use('/riders', riderRouter);

router.use('/races', raceRouter);

router.use('/tracks', trackRouter);

router.use('/teams', teamRouter);

router.use('/seasons', seasonRouter);

router.use('/manufacturers', manufacturerRouter);

// router.use('/*', () => {
//   console.log('Error 404: API route not found');
// })

export default router;

