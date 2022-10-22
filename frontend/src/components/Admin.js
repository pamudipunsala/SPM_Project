import React from "react";
import { Link } from "react-router-dom";


const Admin = () => {
    return(
        <div>
        <li >
                        <a href={'/vieworders'} >Order List</a>
                    </li>
                    <li >
                        <a href={'/paylist'}>Payment List</a>
                    </li>
                    <li >
                        <a href={'/addreq'} >Delivery</a>
                    </li>
                    <li >
                        <a href={'/viewreq'} >Delivery Requests</a>
                    </li>
                    <li >
                        <a href={'/viewteam'} >Delivery Team</a>
                    </li>

        </div>
    )
};

export default Admin;