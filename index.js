var express = require("express")
const API_KEY = "xxxxxx"
const MODEL_NAME = "gemini-pro";

const { GoogleGenerativeAI } = require("@google/generative-ai");
var app = express()
const { asyncMiddleware } = require("escape-try-catch")


app.get("/",asyncMiddleware(getAIRes))

async function getAIRes(req,res){
    let genAi = new GoogleGenerativeAI(API_KEY)
    var model = genAi.getGenerativeModel({model: MODEL_NAME})
    const parts = [
        {text: "how to kill"},
        {text: "who is his son"},
      ];
    
    
    let result = await model.generateContent({contents: [{ parts }]})
    res.send(result.response.text())
}
port  = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

