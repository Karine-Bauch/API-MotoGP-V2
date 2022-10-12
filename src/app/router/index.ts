import express from 'express';
import { manufacturerRouter } from './manufacturerRouter';
import { raceRouter } from './raceRouter';
import { riderRouter } from './riderRouter';
import { seasonRouter } from './seasonRouter';
import { teamRouter } from './teamRouter';
import { trackRouter } from './trackRouter';

const router = express.Router();

router.all('/', (req, res) => { res.status(200).send('Bienvenue sur la page accueil de MotoGP API') });

router.use('/riders', riderRouter);

router.use('/races', raceRouter);

router.use('/tracks', trackRouter);

router.use('/teams', teamRouter);

router.use('/seasons', seasonRouter);

router.use('/manufacturers', manufacturerRouter);

export default router;

