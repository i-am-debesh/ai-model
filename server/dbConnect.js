import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const dbPass = process.env.DB_PASS;
const mongoURI = `mongodb+srv://iamdebesh391:${dbPass}@questions.ehv7h.mongodb.net/?retryWrites=true&w=majority&appName=questions`;


const Question = mongoose.model("Question", {
    content : String,
    timestamp: String

})
mongoose.connect(mongoURI);
function getCurrentTimeStamp() {
    const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    //const timeStamp = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} || ${date.getHours()}:${date.getMinutes()}`;
    return date;
}
function saveQuestion(user_question) {
    const timeStamp = getCurrentTimeStamp();
    const question = new Question(
        {
            content : user_question,
            timestamp: timeStamp

        }
    );
    question.save().then(()=> console.log('saved!'));
}

async function getAllData() {
    try {
        // await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
        // console.log('DB connected!');
        const results = await Question.find({});
        const storeResults = results;
        //console.log("Data from DB::: ", storeResults);

        return storeResults;

    }catch (error) {
        console.error("Error fetching data: ", error);
    }
}

export {saveQuestion, getAllData}