import axios from 'axios';
import React, {Component} from 'react';
import '../index.css';

class ViewReq extends Component{
    constructor(props){
        super(props)
        this.state = {
            deliveries:[]
        };
    }

    componentDidMount(){
        this.displayReq();
    }

    displayReq(){
        axios.get("http://localhost:5000/dreqs").then((res) => {
            if(res.data.success){
                this.setState({
                    deliveries:res.data.existingDrequests
                });
                console.log(this.state.deliveries);
            }
        });
    }


    OnDelete = (id) => {
        axios.delete(`http://localhost:5000/dreq/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.displayReq();
        })
    }
    filterData(deliveries,searchKey){
        const result = deliveries.filter((deliveries)=>
        deliveries.orderid.includes(searchKey)||
        deliveries.name.includes(searchKey)||
        deliveries.mobile.includes(searchKey)||
        deliveries.address.includes(searchKey)
        )
        this.setState({deliveries:result})
      }
    
      

    handleSearchArea= (e)=>{
        const searchKey =e.currentTarget.value;
        axios.get("http://localhost:5000/dreqs").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingDrequests,searchKey)
      }
      });
    }
    
    render(){
        return(
            
                <div className="addreq" >
                <div className="ish">
                <div style={{textAlign:"center", paddingTop:"50px"}}>
                <h2>Delivery Requests</h2>                        
                <div>
                <input className="search" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
            </input><br/><br/>
                <table className="table" style={{margin: "auto", padding: "15px", maxWidth: "1000px", alignContent: "center", color: "white"}}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Customer name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Address</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.deliveries.map((deliveries,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{deliveries.orderid}</td>
                                <td>{deliveries.name}</td>
                                <td>{deliveries.mobile}</td>
                                <td>{deliveries.address}</td>
                                
                                    <td>
                                    <a className="delete" href="#" onClick={()=>this.OnDelete(deliveries._id)}><b>
                                        <i className="fas fa-trash-alt"></i>Delete</b>
                                    </a>
                                </td>                            
                            </tr>
                        ))}
                    </tbody>
                </table><br/><br/>
                <button className="sbtn1" type="button" ><a href="/addreq" style={{textDecoration:'none',color:'white'}}><b>Add new</b></a></button><br/>
                <br/><br/></div>
            </div>
            </div>
            </div>
        ); 
    }
}
export default ViewReq;
