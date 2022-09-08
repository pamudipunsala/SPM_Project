import React,{Component, useRef} from "react";
import axios from "axios";
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
        <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Payment Gateway</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
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
                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                        <label style={{marginBottom:'5px'}}>Card Number</label>
                        <input
                            type="text"
                            id="cardNo"
                            name="cardNo"
                            placeholder="1111-2222-3333-4444"
                            onChange={this.handleInputChange}
                            value={this.state.cardNo}
                        />
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                        <label style={{marginBottom:'5px'}}>Date</label>
                        <input
                            type="date"
                            id="cdate"
                            name="cdate"
                            placeholder="2022-05-21"
                            onChange={this.handleInputChange}
                            value={this.state.cdate}
                        />
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                        <label style={{marginBottom:'5px'}}>Expire Month</label>
                        <input
                            type="text"
                            id="expMonth"
                            name="expMonth"
                            placeholder="September"
                            onChange={this.handleInputChange}
                            value={this.state.expMonth}
                        />
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                        <label style={{marginBottom:'5px'}}>Expire Year</label>
                        <input
                            type="text"
                            id="expYear"
                            name="expYear"
                            placeholder="2022"
                            onChange={this.handleInputChange}
                            value={this.state.expYear}
                        />
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                         <label style={{marginBottom:'5px'}}>CVV</label>
                            <input
                                type="number"
                                id="cvv"
                                name="cvv"
                                placeholder="254"
                                onChange={this.handleInputChange}
                                value={this.state.cvv}
                            />

                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input
                            type="email"
                            id="cemail"
                            name="cemail"
                            placeholder="john@example.com"
                            onChange={this.handleInputChange}
                            value={this.state.cemail}
                        />
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        
                        <label style={{marginBottom:'5px'}}>Amount</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            placeholder="Rs.10000"
                            onChange={this.handleInputChange}
                            value={this.state.amount}
                        />
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}  >
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
    }
}

