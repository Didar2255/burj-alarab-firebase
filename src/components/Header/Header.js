import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, googleSignOut } = useAuth()
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>

                    {user.email && <span className='user-name'>Wellcome : {user.displayName}</span>}
                    {
                        user.email && <button onClick={googleSignOut} className='logout-btn'>Log Out</button>
                    }
                </ul>
            </nav>
            <div className="title-container">
                <h2>Burj Al Arab</h2>
                <h3>A global icon of Arabian luxury</h3>
            </div>
        </div>
    );
};

export default Header;