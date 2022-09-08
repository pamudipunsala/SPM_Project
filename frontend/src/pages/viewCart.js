import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';

export default class ViewCart extends Component{
    constructor(props){
        
            super(props);

            this.state={
                cart:[]
            };
    }

    componentDidMount(){
        return this.retrieveCart();
    }

    retrieveCart(){
        axios.get("http://localhost:5000/cart").then(res => {
            if(res.data.success){
                this.setState({
                    cart:res.data.existingCart

                });
                console.log(this.state.cart)
            }
        });
    }

   /* filterData(cart,searchKey){
        const result = cart.filter((cart) =>
            cart.
        )
    }*/

    render(){
                const {cart} = this.state;
                return this.renderTable(cart);
                {/*<div className="row">
                <div className="col-lg-9-mt-2 mb-2">
                            <h2>Shopping Cart</h2>
                        </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Active</th>
                            <th scope="col">ModifiedOn</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cart.map((cart,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{cart.active}</td>
                                <td>{cart.modifiedOn}</td>
                                <td>{cart.products}</td>
                               


                            </tr>
                        ))}
                    </tbody>
                        </table>*/}
            
    }
}