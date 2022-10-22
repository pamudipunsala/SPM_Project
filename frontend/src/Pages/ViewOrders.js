import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';


export default class ViewOrders extends Component {

    constructor(props){
        super(props);

        this.state={
            order:[]
        };
    }

    componentDidMount(){
        this.retrieveOrders();
    }

    retrieveOrders(){
        axios.get("http://localhost:5000/order").then(res => {
            if (res.data.success){
                this.setState({
                    order:res.data.existingOrder
                });
                console.log(this.state.order)
            }
        })

    }

    onDelete = (id) => {
        axios.delete(`http://localhost:5000/order/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveOrders();
        })
    }

    filterData(order, searchKey){
        const result = order.filter((order) =>
            order.cname.toLowerCase().includes(searchKey)||
            order.cdate.toLowerCase().includes(searchKey)||
            order.cemail.toLowerCase().includes(searchKey)
            
        )

        this.setState({order:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/order").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingOrder,searchKey)
            }
        });
    }

    render(){
        return(
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2>All orders</h2>
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
                                <th scope="col">Date</th>
                                <th scope="col">Address</th>
                                <th scope="col">Postal Code</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.order.map((order,index) => (
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{order.oname}</td>
                                    <td>{order.odate}</td>
                                    <td>{order.address}</td>
                                    <td>{order.zipcode}</td>
                                    <td>{order.mobileNo}</td>
                                    <td>
                                    <a href={`/editorders/${order._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;Edit</button></a>
                                    </td>
                                    <td>
                                        <button className="button-62" role="button" onClick={() => this.onDelete(order._id)}><i className="far fa-trash-alt"></i>&nbsp;
                                            Delete
                                        </button>
                                    </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
        )
    }
}