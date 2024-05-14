import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from "./routes/product.js";

const app = express();
dotenv.config();
app.use(cors())


mongoose.connect(process.env.MONGODB_URI) // Corrected variable name
.then(()=>{
    console.log("connected")
    app.listen(process.env.PORT, ()=>{
        console.log(`app is running on port : ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log(error)
})

app.use('/api' , router)

app.use(express.json());

app.get("/" ,(req , res)=>{
    return res.json("home page is hee")
})