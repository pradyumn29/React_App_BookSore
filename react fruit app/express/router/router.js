const express=require("express")
const router=express.Router()
const connection=require("../db/dbconnect")

router.get("/fruit",(req,resp)=>{
    connection.query("select * from fruit",(err,data)=>{
        if(err)
        {
            resp.status(500).send("error to show"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})

router.post("/fruit/:fid",(req,resp)=>{
    var fid=req.body.fid;
    var fname=req.body.fname;
    var fcol=req.body.fcol;
    var qty=req.body.qty;
    var price=req.body.price;
    connection.query("insert into fruit values(?,?,?,?,?)",[fid,fname,fcol,qty,price],(err,data)=>{
        if(err)
        {
            resp.status(500).send("error to show"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})

router.get("/fruit/:fid",(req,resp)=>{
    connection.query("select * from fruit where fid=?",[req.params.fid],(err,data)=>{
        if(err)
        {
            resp.status(500).send("error to show"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})

router.put("/fruit/:fid",(req,resp)=>{
    var fid=req.body.fid;
    var fname=req.body.fname;
    var fcol=req.body.fcol;
    var qty=req.body.qty;
    var price=req.body.price;
    connection.query("update fruit set fname=?,fcol=?,qty=?,price=? where fid=?",[fname,fcol,qty,price,fid],(err,data)=>{
        if(err)
        {
            resp.status(500).send("error to show"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})

router.delete("/fruit/:fid",(req,resp)=>{
    connection.query("delete from fruit where fid=?",[req.params.fid],(err,data)=>{
        if(err)
        {
            resp.status(500).send("error to show"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }

    })
})

module.exports=router;