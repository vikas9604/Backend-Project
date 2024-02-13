// require ('dotenv').config({path: './env'});
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
 import {app} from './app.js';

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8001, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

// first approach
/*
import express from "express"
const app = express()

( async () => {
    try {
         await mongoose.connect(`${process.env.
            MONGODB_URI}`)
          app.on("error", (err) => {console.log("Error connecting to MongoDB: ", err);
          throw error })

          app.listen(process.env.PORT, () => {
            console.log( `Server running on port ${process.env.PORT}` ) ;
          })


    } catch (error){
        console.error("ERROR:", error)
        throw err 
    }
})() 

*/
