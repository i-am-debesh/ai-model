import mongoose from "mongoose";


const mongoURI = 'mongodb+srv://iamdebesh391:OOf1p5tWseP9fA2M@questions.ehv7h.mongodb.net/?retryWrites=true&w=majority&appName=questions';


const Question = mongoose.model("Question", {
    name : String
})


function saveQuestion(user_question) {
    mongoose.connect(mongoURI);
    const question = new Question({name : user_question});
    question.save().then(()=> console.log('saved!'));
}

export {saveQuestion}