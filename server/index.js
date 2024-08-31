import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { getResponse } from './genAISetup.js';
const app = express();

app.get('/', async(req, res)=>{
    res.send(await getResponse());
    
})
const port = process.env.PORT;
app.listen(port,()=>{
    console.log('app is running at '+port)
})