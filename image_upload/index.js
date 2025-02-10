import express from "express";
import dotenv from "dotenv";
import path from "path";
import multer from "multer";
import { File } from "./model/file.model.js";
import connectDB from "./db.js";

// const upload=multer({dest:"./upload"})//upload multiformdat into upload folder

dotenv.config({
  path: "./.env",
});

const app = express();

const storage = multer.diskStorage({
  //where to upload
  destination: function (req, file, cb) {
    //file:user file
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("homepage");
});
app.post("/upload", upload.single("profileImage"), (req, res) => {
const newFile={
    filename:req.file.filename,
    path:req.file.path,
    originalname:req.file.originalname
}
  const file=File.create(newFile);
  
res.status(200).json({message:"file upload successfully"}) 
//   res.redirect("/");
});

const port = process.env.PORT || 4000;

connectDB().then(() => {
     app.listen(port, () => {
       console.log(`server running on port:${port}`);
     });

}).catch((err) => {
    console.log("MONFODB connection FAILED",err)
});


