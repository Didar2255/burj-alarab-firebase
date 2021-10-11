import React, { useContext } from 'react';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css'


const Login = () => {
    const { googleLogIn, hendelForm } =useAuth()
    return (

        <div className='form'>
            <h1 style={{ textAlign: "center", color: 'blue' }}>Please log in :</h1>
            <div className="login-form">
                <form onSubmit={hendelForm}>
                    <p>Email :</p>
                    <input type="email" name="" id="" /><br />
                    <p>Password :</p>
                    <input type="password" name="" id="" /><br /><br />
                    <input type="submit" value="Log In" />
                    <button className='button' onClick={googleLogIn}>Google Log In</button>
                </form>

            </div>

        </div>
    );
};

export default Login;