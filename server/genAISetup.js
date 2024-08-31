import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});





async function getResponse(prompt= "who is narendra modi and what is his full name?") {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export {getResponse};