import express from 'express';
const riderRouter = require('./riderRouter');

const router = express.Router();

router.all('/', () => { console.log('page accueil') });

router.use('/riders', riderRouter);

// router.use('/*', () => {
//   console.log('Error 404: API route not found');
// })

export default router;

