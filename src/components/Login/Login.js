import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css'


const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const { googleLogIn, hendelForm } = useAuth()
    const redirect_uri = location.state?.form || '/home'
    const hendelGoogleSignIn = () => {
        googleLogIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }
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
                    <button className='button' onClick={hendelGoogleSignIn}>Google Log In</button>
                </form>

            </div>

        </div>
    );
};

export default Login;