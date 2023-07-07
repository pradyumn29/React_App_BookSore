import { useState } from "react";
import Service from "../Service/Service";
import React,{ Component } from "react";
import {Link, Navigate} from 'react-router-dom'

class FruitTable extends React.Component{
    constructor(props){
    super(props);

        this.state={
             farr:[]
        }

    }


    showFruit(){
        Service.getFruit().then((result)=>{
            console.log("successfull",result.data)
            this.setState({...this.state,farr:result.data})
        }).catch((err)=>{console.log(err+JSON.stringify(err))})

    }
componentDidMount(){
    this.showFruit();
}
    deleteByid(fid){
        Service.DeleteFruit(fid).then((result)=>{
            console.log("successfull",result.data)
            this.showFruit();
            Navigate("/")
        }).catch((err)=>{console.log("not deleted"+JSON.stringify(err))});
      
    }

    render(){
        return(
            <div>
                  <table align="center" border="2">
                    <thead>
                        <tr>
                        <th>fid</th>
                        <th>fruit Name</th>
                         <th>fruit color</th>
                         <th>Qty</th>
                         <th>price</th>
                         <th>Axction</th>
                         </tr>
                    </thead>
                    <tbody>
                        {this.state.farr.map((f)=>
                            <tr key={f.fid}>
                                <td>{f.fid}</td>
                                <td>{f.fname}</td>
                                <td>{f.fcol}</td>
                                <td>{f.qty}</td>
                                <td>{f.price}</td>
                                <td><button type="button" id="btn" name="btn" value="delete" 
                                onClick={()=>{this.deleteByid(f.fid)}}>Delete</button></td>
                            </tr>

                        
                        )}
                    </tbody>
                  </table>
                  <Link to="/FruitForm">
                    <button type="button" id="btn" name="btn">Add Fruit</button>
                  </Link>

            </div>

        )
    }
}

export default FruitTable;