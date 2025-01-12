import express from "express"
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})

const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>This website is related to authentication</h1>")
})

const port=process.env.PORT || 3000

app.listen(port,()=>{
   console.log(`⚙️ Server is running at port : ${port}`);
})