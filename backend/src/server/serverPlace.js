import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import placeRouter from '../routes/placeRouters.js';


const app = express();
dotenv.config();
app.use(bodyParser.json());


app.use('/places', placeRouter);



app.listen(3000, () => {console.log('Port 3333');
});
