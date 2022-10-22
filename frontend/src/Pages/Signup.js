import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Signup = () => {
    const[formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    })

    const {
        username,
        email,
        password,
        password2,
        successMsg,
        errorMsg,
        loading
    } = formData;

    /* Event Handlers */
    const handleChange = (evt) => {
        // console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formData);
    };

    const showSignupForm = () => (
        <form onSubmit={handleSubmit} >
        <div className="container">
        <div className="register">
            
            <h1>Register</h1>
            <input 
                type="text" 
                name="username" 
                value={username} 
                placeholder="Username" 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="email" 
                value={email} 
                placeholder="Email address"
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="password" 
                value={password} 
                placeholder="Create password"
                onChange={handleChange} 
            />
            <input 
                type="password" 
                name="password2" 
                value={password2} 
                placeholder="Confirm password"
                onChange={handleChange} 
            />

            <div className="button" >
                <button type='submit' className="button">Signup</button>
            </div>
            <p className='text-center'>
                Have an account? <Link to='/signin'>Log In</Link>
            </p>
            
        </div>
        </div>
        </form>
    );

    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {showSignupForm()}
                    {JSON.stringify(formData)}
                </div>
            </div>         
        </div>
    )
        
};

export default Signup;