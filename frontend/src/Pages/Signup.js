import React from 'react';
import '../index.css';

const Signup = () => {
    const showSignupForm = () => (
        <form>
        <div className="container">
        <div className="register">
            
            <h1>Register</h1>
            <input type="text" name="stname" value="" placeholder="Username" ></input>
            <input type="text" name="stemail" value="" placeholder="Email address" ></input>
            <input type="text" name="stuserName" value="" placeholder="Create password" ></input>
            <input type="password" name="stpwd" value="" placeholder="Confirm password" ></input>
            <div className="button" >Signup</div>
            
        </div>
        </div>
        </form>
    );

    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {showSignupForm()}
                </div>
            </div>         
        </div>
    )
        
};

export default Signup;