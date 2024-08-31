import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { getResponse } from './genAISetup.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/', async(req, res)=>{
    const response = await getResponse();
    res.send(response);
    
})
const port = process.env.PORT;
app.listen(port,()=>{
    console.log('app is running at '+port)
})