import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const iState = {
    orderid:"",
    name:"",
    mobile:"",
    address:"",
    orderiderr:"",
    nameerr:"",
    mobileerr:"",
    addresserr:""
}

export default class AddDreq extends Component{
    state = iState;

    constructor(props){
        super(props);
    
        this.state={
            delivery:[],
        };
    }

    validate = () => {
        let orderiderr = "";
        let nameerr = "";
        let mobileerr = "";
        let addresserr = "";

        if(!this.state.orderid){
            orderiderr = 'ID field cannot be empty!';
        }

        if(!this.state.name){
            nameerr = 'Name field cannot be empty!';
        }

        if(!this.state.mobile){
            mobileerr = 'Mobile number field cannot be empty!';
        }

        if(!this.state.address){
            addresserr = 'Address field cannot be empty!';
        }

        if(orderiderr || nameerr || mobileerr || addresserr ){
            this.setState({orderiderr, nameerr, mobileerr, addresserr});
            return false;
        }

        return true;
    }

    InputChange =(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        const{orderid, name, mobile, address} = this.state;

        const Delivery = {
            orderid:orderid,
            name:name,
            mobile:mobile,
            address:address
        }

     
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(iState);
    
        axios.post("http://localhost:5000/dreq/add",Delivery).then((res) => {               
            alert("Details added successfully!");
            if(res.data.success){
                this.setState({
                    orderid:"",
                    name:"",
                    mobile:"",
                    address:"",
                })
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    render(){
        return (
            <div className="addreq">
                <div className="ish"> 

                <div className="new"> 
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}>
                    <div >
                    <h2>Add Delivery Request</h2>

                    <div>
                        <label name="orderid"><b>Order Code</b></label><br/>
                        <input type="text" 
                            name='orderid' 
                            id='orderid' 
                            placeholder="Eg:XZ000" 
                            value={this.state.orderid} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.orderiderr}</b></div>
                    
                    <div>
                        <label name="name"><b>Customer Name</b></label><br/>
                        <input type="text" 
                            name='name' 
                            id='name' 
                            placeholder="Eg:Kusal Fernando" 
                            value={this.state.name} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.nameerr}</b></div>

                    <div>
                        <label name="mobile"><b>Mobile number</b></label><br/>
                        <input type="text" 
                            name='mobile' 
                            id='mobile' 
                            placeholder="Eg:0771122333" 
                            value={this.state.mobile} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.mobileerr}</b></div>

                    <div>
                        <label name="address"><b>Address</b></label><br/>
                        <input type="text" 
                            name='address' 
                            id='address' 
                            placeholder="Eg:Colombo" 
                            value={this.state.address} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}><b>{this.state.addresserr}</b></div>


                    <br/><br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><a href="/viewIDtl" style={{textDecoration:'none',color:'white'}}><b>Save</b></a></button><br/>
                    </div>
                </form> 
                </div>
                </div>
            </div>
        )
    }
}