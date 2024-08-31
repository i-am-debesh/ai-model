import { getResponse } from "./genAISetup.js";

function decodeQuestion(url) {
    // Extract the part after '='
    const encodedQuestion = url.split('=')[1];
    
    // Decode the percent-encoded characters
    const decodedQuestion = decodeURIComponent(encodedQuestion);
    
    return decodedQuestion;
}
async function handleQuestions(question) {
    
    
    if(question != null) {
        const response = await getResponse(question);
        return response;
    }
}
export {decodeQuestion, handleQuestions}