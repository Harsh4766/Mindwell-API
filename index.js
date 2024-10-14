const express=require("express");
const app=express();
const PORT=8000;

const questions=require("./question.json");

app.get("/api/questions",(req,res)=>{
    return res.json(questions);
});

app.get("/api/questions/:id",(req,res)=>{
    const id=Number(req.params.id);
    const question=questions.find((question)=>question.id===id);
    return res.json(question);
});

app.listen(PORT,()=>{console.log(`Server listening at ${PORT}`);});