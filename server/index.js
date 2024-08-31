import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import { decodeQuestion } from './extras.js';
import { handleQuestions } from './extras.js';

const app = express();
app.use(cors());
app.use(express.json());

try {

    app.get(/=/, async(req, res)=>{
        
        const decodedQuestion = decodeQuestion(req.url);
        //console.log(decodedQuestion)
        const response = await handleQuestions(decodedQuestion);
        res.send(response);
        
    });
    
    
} catch (error) {
    console.log(error)
    
}

const port = process.env.PORT;
app.listen(port,()=>{
    console.log('app is running at '+port)
})