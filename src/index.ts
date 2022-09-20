import http from 'http';
require('dotenv').config();
const app = require('./app');

const port = process.env.PORT ?? 5002;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on http//localhost:${port}`);
});

