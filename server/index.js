import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import { decodeQuestion } from './extras.js';
import { handleQuestions } from './extras.js';
import { deleteByID, getAllData, saveQuestion } from './dbConnect.js';
const app = express();
app.use(cors());
app.use(express.json());



app.get(/=/, async(req, res)=>{
    
    const decodedQuestion = decodeQuestion(req.url);    
    //console.log(decodedQuestion)
    const response = await handleQuestions(decodedQuestion);
    
    const aiResponse = response.candidates[0].content.parts[0].text;
    
    saveQuestion(decodedQuestion,aiResponse);
    res.send(response);
    
});

app.get('/results', async (req,res) => {
    
    const dataFromDB = await getAllData();
    //console.log(dataFromDB);
    res.send(dataFromDB);
})

app.get('/dltID?', async(req,res)=> {
    const dataID = (req.url).slice(7,req.url.length);
    const status = await deleteByID(dataID);
    status === 1?res.json('ok'):res.json('not found');
    
})
    
    


const port = process.env.PORT;
app.listen(port,()=>{
    console.log('app is running at '+port)
})