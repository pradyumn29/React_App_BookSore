import { useState } from "react";
import service from "../service/service";
import React,{ Component } from "react";
import {Link, Navigate} from 'react-router-dom'

class PaintTable extends React.Component{
    constructor(props){
    super(props);

        this.state={
             parr:[]
        }

    }


    showPaint(){
        service.getpaint.then((result)=>{
            console.log("successfull",result.data)
            this.setState({...this.state,parr:result.data})
        }).catch((err)=>{console.log(err+JSON.stringify(err))})

    }
componentDidMount(){
    this.showPaint();
}
    deleteByid(pid){
        service.deletePaint(pid).then((result)=>{
            console.log("successfull",result.data)
            this.showPaint();
            Navigate("/")
        }).catch((err)=>{console.log("not deleted"+JSON.stringify(err))});
      
    }

    render(){
        return(
            <div>
                  <table align="center" border="2">
                    <thead>
                        <tr>
                        <th>pid</th>
                        <th>paint Name</th>
                         <th>color</th>
                         <th>price</th>
                         <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                        {this.state.parr.map((f)=>
                            <tr key={f.pid}>
                                <td>{f.pname}</td>
                                <td>{f.pcolour}</td>
                                <td>{f.price}</td>
                                <td><button type="button" id="btn" name="btn" value="delete" 
                                onClick={()=>{this.deleteByid(f.pid)}}>Delete</button></td>
                            </tr>

                        
                        )}
                    </tbody>
                  </table>
                  <Link to="/PaintForm">
                    <button type="button" id="btn" name="btn">Add Fruit</button>
                  </Link>

            </div>

        )
    }
}

export default PaintTable;