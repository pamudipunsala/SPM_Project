import React,{Component, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'; 
import "../index.css";
import "./button.css"
import emailjs from '@emailjs/browser';

const DoPayment = () =>{
    const navigate = useNavigate();
    const form = useRef();
    const [payment,setPayment] = useState({
    cname:"",
    cardNo:"",
    cdate:"",
    expMonth:"",
    expYear:"",
    cvv:"",
    cemail:"",
    amount:""});

    function handleChange(e){
        setPayment((data)=>({
            ...data, [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:5000/payment/save",payment)
        .then((res)=>{
            setPayment({
                cname:"",
                cardNo:"",
                cdate:"",
                expMonth:"",
                expYear:"",
                cvv:"",
                cemail:"",
                amount:""
            });
            emailjs.sendForm('service_po4f3vc', 'template_mzpvntf', form.current, 'r0p6mYficqz5Ov-qX')
                .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
            alert("Successfully Paid! Check your Email to confirm payment or click home button to go back.")
            console.log(res.payment.message);
            window.location.href = ('/thanks')
        })
        .catch((err)=>{
            console.log("Error couldn't do payment");
            console.log(err.message);
            alert("Error couldn't do payment");
        });
    }

    return(
        <div className="additem">
        <div className="register">
            
            <form className="needs-validation" ref={form} style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", backgroundColor: "rgba(0, 0, 0, 0.560)", color:'white'}}onSubmit={handleSubmit}  noValidate>
            <h1 >Payment Gateway</h1>
                    <label style={{marginBottom:'5px'}}>Name on card</label>
                        <input
                            className="form-control"
                            type="text"
                            id="cname"
                            name="cname"
                            placeholder="John William"
                            onChange={handleChange}
                            value={payment.cname}
                        />
              


                
                    
                    <label style={{marginBottom:'5px'}}>Card Number</label>
                    <input
                        type="text"
                        id="cardNo"
                        name="cardNo"
                        placeholder="1111-2222-3333-4444"
                        onChange={handleChange}
                        value={payment.cardNo}
                    />
                

                
                    
                    <label style={{marginBottom:'5px'}}>Date</label>
                    <input
                        type="date"
                        id="cdate"
                        name="cdate"
                        placeholder="2022-05-21"
                        onChange={handleChange}
                        value={payment.cdate}
                    />
                

                
                    
                    <label style={{marginBottom:'5px'}}>Expire Month</label>
                    <input
                        type="text"
                        id="expMonth"
                        name="expMonth"
                        placeholder="September"
                        onChange={handleChange}
                        value={payment.expMonth}
                    />
               

                
                    
                    <label style={{marginBottom:'5px'}}>Expire Year</label>
                    <input
                        type="text"
                        id="expYear"
                        name="expYear"
                        placeholder="2022"
                        onChange={handleChange}
                        value={payment.expYear}
                    />
                

               
                    
                     <label style={{marginBottom:'5px'}}>CVV</label>
                        <input
                            type="number"
                            id="cvv"
                            name="cvv"
                            placeholder="254"
                            onChange={handleChange}
                            value={payment.cvv}
                        />

               
                    
                    <label style={{marginBottom:'5px'}}>Email</label>
                    <input
                        type="email"
                        id="cemail"
                        name="cemail"
                        placeholder="john@example.com"
                        onChange={handleChange}
                        value={payment.cemail}
                    />
                
                    
                    <label style={{marginBottom:'5px'}}>Amount</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="Rs.10000"
                        onChange={handleChange}
                        value={payment.amount}
                    />
                

                <button className="button-29" type="submit" style={{marginTop:'15px'}}  > Checkout
                </button>
            </form>
            </div>
        </div> 
    )
}

export default DoPayment;
/*export default class DoPayment extends Component {
    constructor(props){
        super(props);
        payment = {
            cname:"",
            cardNo:"",
            cdate:"",
            expMonth:"",
            expYear:"",
            cvv:"",
            cemail:"",
            amount:""
        }
        
    }
    
    


    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...payment,
            [name]:value
        })

    }

    onSubmit = (e) => {
        
        e.preventDefault();
        const {cname,cardNo,cdate,expMonth,expYear,cvv,cemail,amount} = payment;

        const data={
            cname:cname,
            cardNo:cardNo,
            cdate:cdate,
            expMonth:expMonth,
            expYear:expYear,
            cvv:cvv,
            cemail:cemail,
            amount:amount,
        }

        console.log(data)

        axios.post("http://localhost:5000/payment/save",data).then((res) => {
            if(res.data.success){
                alert("Paid Successfully")
                this.setState(
                    {
                        cname:"",
                        cardNo:"",
                        cdate:"",
                        expMonth:"",
                        expYear:"",
                        cvv:"",
                        cemail:"",
                        amount:""
                    }
                )
            }
        })

        
    }

    render(){
        return(
        <div className="container">
            <div className="register">
                <h1 >Payment Gateway</h1>
                <form className="needs-validation" noValidate>
                    
                        <label style={{marginBottom:'5px'}}>Name on card</label>
                            <input
                                className="form-control"
                                type="text"
                                id="cname"
                                name="cname"
                                placeholder="John William"
                                onChange={handleChange}
                                value={payment.cname}
                            />
                  


                    
                        
                        <label style={{marginBottom:'5px'}}>Card Number</label>
                        <input
                            type="text"
                            id="cardNo"
                            name="cardNo"
                            placeholder="1111-2222-3333-4444"
                            onChange={handleChange}
                            value={payment.cardNo}
                        />
                    

                    
                        
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input
                            type="date"
                            id="cdate"
                            name="cdate"
                            placeholder="2022-05-21"
                            onChange={handleChange}
                            value={payment.cdate}
                        />
                    

                    
                        
                        <label style={{marginBottom:'5px'}}>Expire Month</label>
                        <input
                            type="text"
                            id="expMonth"
                            name="expMonth"
                            placeholder="September"
                            onChange={handleChange}
                            value={payment.expMonth}
                        />
                   

                    
                        
                        <label style={{marginBottom:'5px'}}>Expire Year</label>
                        <input
                            type="text"
                            id="expYear"
                            name="expYear"
                            placeholder="2022"
                            onChange={handleChange}
                            value={payment.expYear}
                        />
                    

                   
                        
                         <label style={{marginBottom:'5px'}}>CVV</label>
                            <input
                                type="number"
                                id="cvv"
                                name="cvv"
                                placeholder="254"
                                onChange={handleChange}
                                value={payment.cvv}
                            />

                   
                        
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input
                            type="email"
                            id="cemail"
                            name="cemail"
                            placeholder="john@example.com"
                            onChange={handleChange}
                            value={payment.cemail}
                        />
                    
                        
                        <label style={{marginBottom:'5px'}}>Amount</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            placeholder="Rs.10000"
                            onChange={handleChange}
                            value={payment.amount}
                        />
                    

                    <button className="button-29" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}  > Checkout
                    </button>
                </form>
                </div>
            </div>
        )
    }
}
*/
