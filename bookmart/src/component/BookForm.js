import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import service from '../service/service';

const BookForm=()=>{
    let Navigate=useNavigate();
    let [formDetails,setformDetaails]=useState({bId:"",bName:"",Author:"",lang:"",price:""});

    let addbook=()=>{
             service.bookInsert(formDetails).then(()=>{
                     console.log("formdetails");
                     Navigate("/");//visualization
             }).catch(()=>{console.log("not inserted")})
    }


return(
    <div>
        <fieldset>
            <legend>Book Mart</legend>
        <form>
             book Id:<input type="text" id="bId" name="bId" value={formDetails.bId}
             onChange={(event)=>{setformDetaails({...formDetails,bId:event.target.value})}}></input>

Book Name:<input type="text" id="bName" name="bName" value={formDetails.bName}
             onChange={(event)=>{setformDetaails({...formDetails,bName:event.target.value})}}></input>

Book Author:<input type="text" id="Author" name="Author" value={formDetails.Author}
             onChange={(event)=>{setformDetaails({...formDetails,Author:event.target.value})}}></input>

Language:<input type="text" id="lang" name="lang" value={formDetails.lang}
             onChange={(event)=>{setformDetaails({...formDetails,lang:event.target.value})}}></input>

price:<input type="text" id="price" name="price" value={formDetails.price}
             onChange={(event)=>{setformDetaails({...formDetails,price:event.target.value})}}></input>

             <button type="button" id="id" name="btn" value="btn" onClick={addbook}>Add Book</button>
        </form>
        </fieldset>
    </div>
)
}
export default BookForm;