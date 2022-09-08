import React,{Component, useRef} from "react";
import axios from "axios";
import "../index.css";
import "./button.css"
import emailjs from '@emailjs/browser';

//const form = useRef();
export default class DoPayment extends Component {
    constructor(props){
        super(props);
        this.state = {
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
            ...this.state,
            [name]:value
        })

    }

    onSubmit = (e) => {
        
        e.preventDefault();
        const {cname,cardNo,cdate,expMonth,expYear,cvv,cemail,amount} = this.state;

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
                alert("Details Saved Successfully")
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
            else {
                alert("invlid input")
            }
        })

        //emailjs.sendForm('service_po4f3vc', 'template_mzpvntf', form.current, 'r0p6mYficqz5Ov-qX')
          //  .then((result) => {
            //    console.log(result.text);
            //}, (error) => {
              //  console.log(error.text);
        //});
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
                                onChange={this.handleInputChange}
                                value={this.state.cname}
                            />
                  


                    
                        
                        <label style={{marginBottom:'5px'}}>Card Number</label>
                        <input
                            type="text"
                            id="cardNo"
                            name="cardNo"
                            placeholder="1111-2222-3333-4444"
                            onChange={this.handleInputChange}
                            value={this.state.cardNo}
                        />
                    

                    
                        
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input
                            type="date"
                            id="cdate"
                            name="cdate"
                            placeholder="2022-05-21"
                            onChange={this.handleInputChange}
                            value={this.state.cdate}
                        />
                    

                    
                        
                        <label style={{marginBottom:'5px'}}>Expire Month</label>
                        <input
                            type="text"
                            id="expMonth"
                            name="expMonth"
                            placeholder="September"
                            onChange={this.handleInputChange}
                            value={this.state.expMonth}
                        />
                   

                    
                        
                        <label style={{marginBottom:'5px'}}>Expire Year</label>
                        <input
                            type="text"
                            id="expYear"
                            name="expYear"
                            placeholder="2022"
                            onChange={this.handleInputChange}
                            value={this.state.expYear}
                        />
                    

                   
                        
                         <label style={{marginBottom:'5px'}}>CVV</label>
                            <input
                                type="number"
                                id="cvv"
                                name="cvv"
                                placeholder="254"
                                onChange={this.handleInputChange}
                                value={this.state.cvv}
                            />

                   
                        
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input
                            type="email"
                            id="cemail"
                            name="cemail"
                            placeholder="john@example.com"
                            onChange={this.handleInputChange}
                            value={this.state.cemail}
                        />
                    
                        
                        <label style={{marginBottom:'5px'}}>Amount</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            placeholder="Rs.10000"
                            onChange={this.handleInputChange}
                            value={this.state.amount}
                        />
                    

                    <button className="button-29" role="button" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}  > Checkout
                    </button>
                </form>
                </div>
            </div>
        )
    }
}

