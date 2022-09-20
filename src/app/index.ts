import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();

// Parse Json
app.use(express.json());
// Parse urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CORS_DOMAIN ?? '*' }));

//TODO config views
//TODO config static folder
//TODO config API DOCS / JSDOCS

app.use(router);


module.exports = app;