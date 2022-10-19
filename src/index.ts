import http from 'http';
// require('dotenv').config();
import dotenv from 'dotenv';
// const app = require('./app');
import app from './app';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on http//localhost:${port}`);
});

