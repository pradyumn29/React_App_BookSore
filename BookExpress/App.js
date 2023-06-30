const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./router/router");
const cors=require("cors");
const axios=require("axios");
//middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//cors
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
//url handler

app.use("/",router);

//start
app.listen(3002,function(){
    console.log("server started 3002");
})

module.exports=app;