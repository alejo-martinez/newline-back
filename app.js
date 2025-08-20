import express from "express";
import cors from 'cors';
import config from "./src/config/config.js";
import mailerRouter from './src/router/mailer.route.js';

const app = express();
app.use(cors({ origin: config.urlFront }));
app.use(express.json());

app.use('/api/mailer', mailerRouter);

app.listen(config.port, () => console.log(`Servidor escuchando en http://localhost:${config.port}`));