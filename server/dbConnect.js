import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const dbPass = process.env.DB_PASS;
const mongoURI = `mongodb+srv://iamdebesh391:${dbPass}@questions.ehv7h.mongodb.net/?retryWrites=true&w=majority&appName=questions`;


const Question = mongoose.model("Question", {
    name : String
})
mongoose.connect(mongoURI);

function saveQuestion(user_question) {
    
    const question = new Question({name : user_question});
    question.save().then(()=> console.log('saved!'));
}

export {saveQuestion}