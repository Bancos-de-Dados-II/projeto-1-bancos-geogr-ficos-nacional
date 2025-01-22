import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import placeRouter from '../routes/placeRouters.js';
import cors from "cors";

dotenv.config();

const app = express();

//setando configurações
app.use(bodyParser.json());
app.use(cors());

//setando rotas
app.use('/places', placeRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`maps api running in http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})
