import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import service from "../service/service";

function PaintForm(){

    let Navigate= navigator;
    let[PaintDetails,setPaintDeatails]=useState({pid:"",pname:"",pcolour:"",price:""});

    let addNewpaint=()=>{
        service.addPaint(PaintDetails).then(()=>{
            console.log("successfully added");
            Navigate("/")
        }).catch()
    }
    return(
        <div>
            <form>
                Enter Paint Id:<input type="text" id="id" name="id" value={PaintDetails.pid}
                onChange={(event)=>{setPaintDeatails({...setPaintDeatails,pid:event.target.value})}}></input><br></br>

                Enter Paint Name:<input type="text" id="nm" name="nm" value={PaintDetails.pname}
                onChange={(event)=>{setPaintDeatails({...setPaintDeatails,pname:event.target.value})}}></input><br></br>
                
                Enter Paint colour:<input type="text" id="col" name="col" value={PaintDetails.pcolour}
                onChange={(event)=>{setPaintDeatails({...setPaintDeatails,pcolour:event.target.value})}}></input><br></br>
                
                Enter Paint Price:<input type="text" id="prc" name="prc" value={PaintDetails.price}
                onChange={(event)=>{setPaintDeatails({...setPaintDeatails,price:event.target.value})}}></input><br></br>
                
                <button type="button" id="btn" name="btn" onClick={addNewpaint}>Add New Paint</button>
            </form>
        </div>

    )
}

export default PaintForm;