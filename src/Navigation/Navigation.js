import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/welcome">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>);
}

export default Navigation;