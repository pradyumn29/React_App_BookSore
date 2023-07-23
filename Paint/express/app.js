const express=require("express")
const router=require("./router/router")
const bodyparser=require("body-parser")
const cors=require("cors");
const app=express();


app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.use(cors({
    origin:"http//localhost:3000",
    credentials:true
}))
app.use("/",router);

app.listen(3002,function(){
    console.log("port running on 3002");
})

