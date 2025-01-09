import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const app=express();

app.use('/',(req,res,next)=>{
  console.log('Hello')
  next()
})

app.get('/next',(req,res,next)=>{
    console.log('hi there')
    next()
    console.log('hi there you again here!')
})

app.get('/return-next',(req,res,next)=>{
    console.log('hi there')
   return next()
    console.log('hello there')
})


app.listen(process.env.PORT,()=>{
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})



