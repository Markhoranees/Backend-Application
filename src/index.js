import connectDB from "../src/db/index.js";
import dotenv from 'dotenv';


dotenv.config({path:'./env'});



connectDB()
.then (() =>{
    application.listen(process.env.PORT || 8000, () =>{
        console.log('server is running at port : ${{process.env.PORT} ');
    })
})
.catch( (err)=>{
    console.log("Mongo Db connection failed !! ",err)
})









/*
import express from "express"

const app=express();



(async ()=>{
    try{
        await  mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
        app.on("error", (error)=>{
            console.log("ERROR:",error)
            throw err
        })

        app.listen(process.env.PORT, ()=>{
            console.log('App is Listening on Port: ${process.env.PORT}')  
        })
    }
    catch(error) {
         console.error("ERror:",error)
         throw err
    }
})()
    */