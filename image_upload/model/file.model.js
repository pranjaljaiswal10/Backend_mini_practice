import mongoose from "mongoose";

const fileSchema=new mongoose.Schema({
   filename:String,
   path:String,
   originalName:String
},{
    timestamps:true
})

export const File=mongoose.model("File",fileSchema)