import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = process.env.API_KEY;
  
  async function runScan(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
   export default runScan;