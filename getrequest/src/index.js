import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
  { id: 3, make: "Ford", model: "Mustang", year: 2022 },
  { id: 4, make: "Chevrolet", model: "Corvette", year: 2023 },
  { id: 5, make: "Tesla", model: "Model 3", year: 2021 },
  { id: 6, make: "Nissan", model: "Altima", year: 2022 },
  { id: 7, make: "BMW", model: "X5", year: 2023 },
  { id: 8, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 9, make: "Audi", model: "A4", year: 2022 },
  { id: 10, make: "Lexus", model: "RX", year: 2023 },
  { id: 11, make: "Hyundai", model: "Tucson", year: 2021 },
  { id: 12, make: "Kia", model: "Seltos", year: 2022 },
  { id: 13, make: "Mazda", model: "CX-5", year: 2023 },
  { id: 14, make: "Subaru", model: "Outback", year: 2021 },
  { id: 15, make: "Volkswagen", model: "Golf", year: 2022 },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello in the world of cars</h1>");
});

// app.get("/cars", (req, res) => {
//   res.json(cars);
// });

app.get("/cars/:id", (req, res) => {
  const {id}=req.params;
  const carId=parseInt(id);
  const searchCars=cars.find((car)=>car.id===carId)
  if(searchCars)
  {
    res.send(searchCars)
  }
  else
  {
    res.status(404).json({error:"not found"})
  }

})

app.get("/cars/:make/:model",(req,res)=>{
  const {make,model}=req.params;
  const filteredCars=cars.filter((car)=>car.make.toLowerCase()===make.toLowerCase() && car.model.toLowerCase()===model.toLowerCase())
   if(filteredCars)
  {
    res.json(filteredCars)
  }
  else{
    res.status(404).json({error:"not found"})
  }
})

app.get("/cars", (req, res) => {
   console.log("Query Params:", req.query); 
  const { make,model } = req.query;
  let filteredCars = cars;
  if (make) {
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }
  if (model) {
    filteredCars = filteredCars.filter(
      (car) => car.model.toLowerCase() === model.toLowerCase()
    );
  }
  res.json(filteredCars);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`⚙️ Server is running at port : ${port}`);
});
