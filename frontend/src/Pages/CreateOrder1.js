import React,{Component, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'; 

import "../index.css";
import "./button.css"
import emailjs from '@emailjs/browser';

const CreateOrder = () =>{
    const navigate= useNavigate();
    const [order,setOrder] = useState({
        oname:'', 
        odate:'', 
        address:'', 
        zipcode:'', 
        mobileNo:'',});

    function handleChange(e){
        setOrder((data)=>({
            ...data, [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:5000/order/save",order)
        .then((res)=>{
            setOrder({
                oname:'', 
                odate:'', 
                address:'', 
                zipcode:'', 
                mobileNo:''
            });
            alert("Click ok to checkout!")
            console.log(res.order.message);
            //window.location.href = ("/pay")
            
        })
        .catch((err)=>{
            console.log(err.message);
        });
    }

    return(
        <div className="additem">
                <form className="needs-validation" onSubmit={handleSubmit} style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}} noValidate>
                <h1 className="h3 mb-3 font-weight-normal">Add Your Shipping Details</h1>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Customer Name</label>
                        <input type="text"
                        className="form-control"
                        name="oname"
                        placeholder="John Smith"
                        value={order.oname}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input type="date"
                        className="form-control"
                        name="odate"
                        placeholder="YYYY/MM/DD"
                        value={order.odate}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text"
                        className="form-control"
                        name="address"
                        placeholder="No.152,Flower Road,Kandy"
                        value={order.address}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Postal Code</label>
                        <input type="text"
                        className="form-control"
                        name="zipcode"
                        placeholder="10500"
                        value={order.zipcode}
                        onChange={handleChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Mobile Number</label>
                        <input type="text"
                        className="form-control"
                        name="mobileNo"
                        placeholder="0712345677"
                        value={order.mobileNo}
                        onChange={handleChange}/>
                    </div>

                    

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
    )
}

export default CreateOrder;