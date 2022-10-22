import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
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
        loading: true
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
            successMsg: '',
            errorMsg: '',

        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        //client-side validation
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
            setFormData({
                ...formData, errorMsg: 'All fields are required'
            });
        } else if(!isEmail(email)){
            setFormData({
                ...formData, errorMsg: 'Invalid Email'
            });
        } else if(!equals(password, password2)){
            setFormData({
                ...formData, errorMsg: 'Passwords do not match'
            });
        } else {
            setFormData({
                ...formData, successMsg: 'Validation Success'
            });

        }
    };

    const showSignupForm = () => (
        <form onSubmit={handleSubmit} noValidate>
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
                    {successMsg && showSuccessMsg(successMsg)}
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && (
                        <div className='text-center pb-4'>{showLoading()}</div>
                        )}
                    {showSignupForm()}
                    {/* {JSON.stringify(formData)} */}
                </div>
            </div>         
        </div>
    )
        
};

export default Signup;