import express from 'express';

const router = express.Router();

router.all('/', () => { console.log('page accueil') });

router.use(() => {
  console.log('Error 404: API route not found');
})

export default router;

