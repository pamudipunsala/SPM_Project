import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';


export default class ViewPayments extends Component {

    constructor(props){
        super(props);

        this.state={
            payment:[]
        };
    }

    componentDidMount(){
        this.retrievePayments();
    }

    retrievePayments(){
        axios.get("http://localhost:5000/payment").then(res => {
            if (res.data.success){
                this.setState({
                    payment:res.data.existingPayment
                });
                console.log(this.state.payment)
            }
        })

    }

    onDelete = (id) => {
        axios.delete(`http://localhost:5000/payment/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrievePayments();
        })
    }

    filterData(payment, searchKey){
        const result = payment.filter((payment) =>
            payment.cname.toLowerCase().includes(searchKey)||
            payment.cdate.toLowerCase().includes(searchKey)||
            payment.cemail.toLowerCase().includes(searchKey)
            
        )

        this.setState({payment:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/payment").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPayment,searchKey)
            }
        });
    }

    render(){
        return(
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2>All Payments</h2>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input 
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}></input>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Card Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Expire Month</th>
                                <th scope="col">Expire Year</th>
                                <th scope="col">CVV</th>
                                <th scope="col">Email</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.payment.map((payment,index) => (
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{payment.cname}</td>
                                    <td>{payment.cardNo}</td>
                                    <td>{payment.cdate}</td>
                                    <td>{payment.expMonth}</td>
                                    <td>{payment.expYear}</td>
                                    <td>{payment.cvv}</td>
                                    <td>{payment.cemail}</td>
                                    <td>{payment.amount}</td>
                                    <td>
                                    
                                    <button className="button-62" role="button" onClick={() => this.onDelete(payment._id)}><i className="far fa-trash-alt"></i>&nbsp;
                                    Delete
                                </button>                                    </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        )
    }
}