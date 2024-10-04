import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';


dotenv.config({
    path:'./.env'
})

connectDB()  //bcz i am using async it returns a promise
.then(()=>{
    app.listen(process.env.PORT || 8001 , ()=>{
        console.log("Server is running")
    })
})
.catch((err)=>{
    console.log("Database connection failed",err)
})

