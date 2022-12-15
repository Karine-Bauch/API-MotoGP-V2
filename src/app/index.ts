import express from 'express';
import cors from 'cors';
import router from './router';
// import swaggerUi from 'swagger-ui-express';

const app = express();

// Parse Json
app.use(express.json());
// Parse urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CORS_DOMAIN ?? '*' }));

app.set('view engine', 'ejs');

//TODO config static folder
//TODO config API DOCS / JSDOCS

app.use(router);

app.use((req, res) => { res.status(404).send('Vous vous êtes perdu on dirait !') })


export default app;