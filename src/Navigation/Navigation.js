import React from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetLogOut } from '../redux/action/LoginActions';
const Navigation = (props) => {
    const dispatch = useDispatch();
    const { isLogged } = useSelector((state) => state.LoginReducer);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("userData");
        dispatch(SetLogOut());//logout
        navigate("login");
    };

    return (
        <nav>
            <ul>


                {isLogged && (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/welcome">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {/* <li><Link onClick={logout}>Logout</Link></li> */}
                        <li><a style={{ color: "white", cursor: "pointer" }} onClick={logout}>Logout</a></li>
                    </>

                )}

                {!isLogged && (

                    <li><Link to="/login">Login</Link></li>

                )}



            </ul>
        </nav >);
}

export default Navigation;