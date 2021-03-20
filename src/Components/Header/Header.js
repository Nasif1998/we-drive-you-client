import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        <div>
            <h1 style={{color: 'yellowgreen'}} className="header">We Drive You</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;