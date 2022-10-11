import express from 'express';
const riderRouter = require('./riderRouter');
const raceRouter = require('./raceRouter');
const trackRouter = require('./trackRouter');
const teamRouter = require('./teamRouter');
const seasonRouter = require('./seasonRouter');
const manufacturerRouter = require('./manufacturerRouter');

const router = express.Router();

router.all('/', (req, res) => { res.status(200).send('Bienvenue sur la page accueil de MotoGP API') });

router.use('/riders', riderRouter);

router.use('/races', raceRouter);

router.use('/tracks', trackRouter);

router.use('/teams', teamRouter);

router.use('/seasons', seasonRouter);

router.use('/manufacturers', manufacturerRouter);

export default router;

