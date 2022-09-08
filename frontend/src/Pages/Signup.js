import React, {useState} from 'react';
import "../index.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const history = useNavigate()

    const [ users, setUsers] = useState({
        uname:"",
        regNo:"",
        uemail:"",
        userName:"",
        upwd:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUsers({
            ...users,
            [name]: value
        })
    }

    const register = () => {
        const { uname, regNo, uemail, userName, upwd } = users
        if( uname && regNo && uemail && userName && upwd){
            axios.post("http://localhost:3000/register", users)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="container">
        <div className="register">
            {console.log("Users", users)}
            <h1>SignUp</h1>
            <input type="text" name="uname" value={users.uname} placeholder="Enter Your Name" onChange={ handleChange }></input>
            <input type="text" name="regNo" value={users.regNo} placeholder="Enter Your Register Number" onChange={ handleChange }></input>
            <input type="text" name="uemail" value={users.uemail} placeholder="Enter Your Email" onChange={ handleChange }></input>
            <input type="text" name="userName" value={users.userName} placeholder="Enter UserName" onChange={ handleChange }></input>
            <input type="password" name="upwd" value={users.upwd} placeholder="Enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >SignUp</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
        </div>
    )
};

export default Signup;