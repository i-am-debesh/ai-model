import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import { decodeQuestion } from './extras.js';
import { handleQuestions } from './extras.js';
import { getAllData, saveQuestion } from './dbConnect.js';
const app = express();
app.use(cors());
app.use(express.json());



app.get(/=/, async(req, res)=>{
    
    const decodedQuestion = decodeQuestion(req.url);
    saveQuestion(decodedQuestion);
    //console.log(decodedQuestion)
    const response = await handleQuestions(decodedQuestion);
    res.send(response);
    
});

app.get('/results', async (req,res) => {
    
    const dataFromDB = await getAllData();
    //console.log(dataFromDB);
    res.send(dataFromDB);
}) 
    
    


const port = process.env.PORT;
app.listen(port,()=>{
    console.log('app is running at '+port)
})