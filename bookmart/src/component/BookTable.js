import React, { Component,Fragment } from "react"
import {Link} from "react-router-dom"
import service from "../service/service"

class BookTable extends React.Component{
    constructor(props){
    super(props)

        this.state={
            sarr:[]
        }
    }


showData(){
    service.getbook().then((result)=>{
       console.log("succesful",result.data);
       this.setState({...this.state,sarr:result.data});
    }).catch(()=>{console.log("not displayedd")})
}

componentDidMount(){
    
    this.showData()
    // service.getbook().then((result)=>{
    //     console.log(result.data);
    //     this.setState({...this.state,sarr:result.data});
    // }).catch((err)=>{
    //     console.log("not displayed"+JSON.stringify(err))})
}

deletebyId=(bId)=>{
    service.BookDelete(bId).then((result)=>{
        console.log(result.data);
        this.showData()
    }).catch((err)=>{console.log("not deleted"+JSON.stringify(err))})
}

render(){
    return(

        <div>
            <div>
            <table align="center" border="2">
                <thead>
                    <tr>
                        <th>book id</th>
                        <th>book name</th>
                        <th>Author</th>
                        <th>Language</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.sarr.map((b)=>
                         <tr key={b.bId}>
                            <td>{b.bId}</td>
                            <td>{b.bName}</td>
                            <td>{b.Author}</td>
                            <td>{b.lang}</td>
                            <td>{b.price}</td>
                            <td><button type="button" id="delete" name="delete" value="delete" onClick={()=>{this.deletebyId(b.bId)}}>delete</button></td>
                         </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
        <div>
              <Link to="/bookform">
                <button type="button" id="btn" name="btn">Add New Book</button>
              </Link>
        </div>

    </div>
    )
}

}

export default BookTable;