import React, {Component} from "react";
import axios from "axios";

export default class ViewSingleItem extends Component{
    constructor(props){
        super(props);
        this.state={
            items:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/items/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    items:res.data.items
                });
                console.log(this.state.items);
            }
        });
    }
    render(){
        const{icode, iname, ctg, amt, price} = this.state;
      return(
        
        <div className="addtopic">                    

           <div className="ish"style={{padding:"50px"}}>
           <div style={{paddingLeft:"550px", paddingTop:"20px"}}><h2>Saved Details</h2></div>
               <div class="dis" style={{padding:"100px"}}>
               <label><b>Item Code - </b></label> {icode}<br/>

               <label><b>Item Name - </b></label> {iname}<br/>

               <label><b>Category - </b></label> {ctg}<br/>

               <label><b>Amount - </b></label> {amt}<br/>

               <label><b>Price - </b></label> {price}<br/>
               </div>
               <br/>

               <button className="vbtn" type="button" style={{marginLeft:"600px"}}><a href="/viewTDtl"><b>Back</b></a></button><br/>
           </div>
  
        </div>
       
      )
    }
  }