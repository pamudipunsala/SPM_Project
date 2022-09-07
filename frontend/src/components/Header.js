import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    //views
    const showNavigation = () => (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="#" className="navbar-brand" href="#">Navbar</Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="#" className="nav-link">Sign Up </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="#" className="dropdown-item" href="#">Action</Link>
                        <Link to="#" className="dropdown-item" href="#">Another action</Link>
                        <div clclassNameass="dropdown-divider"></div>
                        <Link to="#" className="dropdown-item" href="#">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link disabled" href="#">Disabled</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );

    //render
    return <header id='header'>{showNavigation()}</header>;
};

export default Header;