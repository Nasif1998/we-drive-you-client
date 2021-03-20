import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    const {loggesInUser, setLoggedInUser} = props;
    return (
        <div>
            <h1 className="header">Urban Riders</h1>
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
                    {/* <li>
                        <h6>User: {() => setLoggedInUser(loggedInUser)}</h6>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;