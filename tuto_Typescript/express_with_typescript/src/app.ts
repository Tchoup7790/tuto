import express from 'express';
import router from './api/routes/router';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const apiUrl = process.env.API_URL ? process.env.API_URL : '/api';
const app = express();

app.use(express.json());
app.use(cors());
app.use(apiUrl, router);

export default app;