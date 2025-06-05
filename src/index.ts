import express from 'express';
import bodyParser from 'body-parser';
import {errorHandler} from "./infrastructure/middlewares/error.middleware.js";
import cors from 'cors';
import dotenv from 'dotenv';
import {workflowRoutes} from "./interface/routes/workflow.routes.js";
import {registrationRoutes} from "./interface/routes/registration.routes.js";
import { connectToDatabase } from './config/db.js';

dotenv.config();
export const app = express();

app.use(errorHandler)
app.use(bodyParser.json());
app.use('/workflow', workflowRoutes);
app.use('/registration', registrationRoutes);
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const start = async () => {
    await connectToDatabase();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`WorkFlow API listening on port ${PORT}!`);
    })
}

start()