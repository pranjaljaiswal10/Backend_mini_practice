import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const app = express();

app.use(express.json())
const mockUsers = [
  { id: 1, username: "anson", displayname: "anson" },
  {
    id: 2,
    username: "jack",
    displayname: "Jack",
  },
  { id: 3, username: "adam", displayname: "Adam" },
];

app.get("/", (req, res) => {
  res.status(201).send("Hello world");
});

app.get("/api/users", (req, res) => {
  const {filter,value}=req.query;
  if(filter && value)
  {
    const filteredUser=mockUsers.filter(user=>user[filter].includes(value))
    res.send(filteredUser)
  }
  res.json(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
  const parseId = parseInt(req.params.id);
  if (isNaN(parseId)) {
     res.status(400).send({ message: "Bad request,Invalid ID" });
  }
  const findUser=mockUsers.find(user=>user.id===parseId)
  if(findUser)
  {
   res.send(findUser)
  }
  else{
    res.status(404).send({error:"Data not found"})
  }
});

app.get('/api/users/products',(req,res)=>{
  res.send([{id:1,name:"T-shirt",price:"₹299"},{id:2,name:"Shirt",price:"₹699"},{id:3,name:"Trouser",price:"₹999"}])
})

app.post("/api/users",(req,res)=>{
  console.log(req.body)
  res.status(200)
})

app.listen(process.env.PORT, () => {
  console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
});
