const express=require("express")
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/paint",(req,resp)=>{
    connection.query("select * from paint",(err,data)=>{
        if(err){
            resp.status(500).send("not retrived"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

router.post("/paint/:pid",(req,resp)=>{
    const pid=req.body.pid;
    const pname=req.body.pname;
    const pcolour=req.body.pcolour;
    const price=req.body.price;
    connection.query("insert into paint values(?,?,?,?)",[pid,pname,pcolour,price],(err,data)=>{
        if(err){
            resp.status(500).send("not retrived"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

router.put("/paint/:pid",(req,resp)=>{
    const pid=req.params.pid;
    const pname=req.body.pname;
    const pcolour=req.body.pcolour;
    const price=req.body.price;
    
    connection.query("update paint set pname=?,pcolour=?,price=? where pid=?",[pname,pcolour,price,pid],(err,data)=>{
        if(err){
            resp.status(500).send("not retrived"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

router.delete("/paint/:pid",(req,resp)=>{
    connection.query("delete from paint where pid=?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("not retrived"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

module.exports=router;