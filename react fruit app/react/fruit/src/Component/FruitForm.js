import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Service from "../Service/Service";

function FruitForm(){
    
    let Navigate=useNavigate();
    let[Fruitdetails,setFruitdetails]=useState({fid:"",fname:"",fcol:"",qty:"",price:""})


    let addFruit=()=>{
        Service.FruitInsert(Fruitdetails).then(()=>{
            console.log("in insert")
            Navigate("/");
        }).catch(()=>{console.log("not inserted")})
    }

    return(
        <div>
            <form>
        Fruit ID:<input type="text" id="fid" name="fid" value={Fruitdetails.fid}
                onChange={(event)=>{setFruitdetails({...Fruitdetails,fid:event.target.value})}}></input><br></br>

        Fruit Name:<input type="text" id="fname" name="fname" value={Fruitdetails.fname}
                onChange={(event)=>{setFruitdetails({...Fruitdetails,fname:event.target.value})}}></input><br></br>
           
        Fruit Color:<input type="text" id="fcol" name="fcol" value={Fruitdetails.fcol}
                onChange={(event)=>{setFruitdetails({...Fruitdetails,fcol:event.target.value})}}></input><br></br>
           
        Fruit Qty:<input type="text" id="qty" name="qty" value={Fruitdetails.qty}
                onChange={(event)=>{setFruitdetails({...Fruitdetails,qty:event.target.value})}}></input><br></br>
           
        Fruit Price:<input type="text" id="price" name="price" value={Fruitdetails.price}
                onChange={(event)=>{setFruitdetails({...Fruitdetails,price:event.target.value})}}></input><br></br>
           <button type="button" id="btn" name="btn" value="btn" onClick={addFruit}>Add Fruit</button>
            </form>
        </div>
    )
}

export default FruitForm;