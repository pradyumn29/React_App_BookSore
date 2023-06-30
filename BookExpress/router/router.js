const express=require("express");
const connection=require("../db/dbconnect");
const router=express.Router();

//show
router.get("/book",(req,resp)=>{
    connection.query("select * from book",(err,data)=>{
        if(err){
            resp.status(500).send("not selected"+JSON.stringify(err));
        }
        else{
           
            resp.send(data);
        }
    })
})
//insert
router.post("/book/:bid",(req,resp)=>{
    var bId=req.body.bId;
    var bName=req.body.bName;
    var Author=req.body.Author;
    var lang=req.body.lang;
    var price=req.body.price;

    connection.query("insert into book values (?,?,?,?,?)",[bId,bName,Author,lang,price],(err,data)=>{
        if(err){
            resp.status(500).send("not inserted"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }

    })
})
//update
router.put("/book/:bid",(req,resp)=>{
    var bId=req.body.bId;
    var bName=req.body.bName;
    var Author=req.body.Author;
    var lang=req.body.lang;
    var price=req.body.price;

    connection.query("update book set bName=?,Author=?,lang=?,price=? where bId=?",[bName,Author,lang,price,bId],(err,data)=>{
        if(err){
            resp.status(500).send("not updated"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

//select by id
router.get("/book/:bid",(req,resp)=>{
    connection.query("select * from book where bId=?",[req.params.bid],(err,data)=>{
        if(err){
            resp.status(500).send("not updated"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})


//delete
router.delete("/book/:bid",(req,resp)=>{
    connection.query("delete from book where bId=?",[req.params.bid],(err,data)=>{
        if(err){
            resp.status(500).send("not updated"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })

})

module.exports=router;
