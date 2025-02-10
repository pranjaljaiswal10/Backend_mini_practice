import express from "express";
import dotenv from "dotenv";
import path from "path";
import {createServer} from "http";
import {Server} from "socket.io";

dotenv.config({
    path:"./.env"
})

const app=express()
const server=createServer(app)
const io=new Server(server) //in second option handle cors error

// Handle socket connections
io.on("connection",(socket)=>{
  // Handle chat messages
  socket.on("user-message", (message) => {
    io.emit("message", message); // Broadcast the message to all clients
  });

  // BAD
 
  //   // Handle disconnection
  //   socket.on("disconnect", () => {
  //     console.log("A user disconnected");
  //   });
})
    
app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  return res.sendFile("./public/index.html");
});


const port=process.env.PORT || 4000
server.listen(port,()=>{
    console.log(`Server running on port;${port}`)
})