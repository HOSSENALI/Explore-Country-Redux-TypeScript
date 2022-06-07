import React from 'react'
import { Link, useNavigate,  } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../App.css';
const Navigation = (props) => {
    console.log("props", props);
    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState("");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("userData");
        setIsLogged(false);
        navigate("login");
    };

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
        setUserData(userData);
        if (typeof userData != "undefined") {
            if (userData.username && userData.username.length > 0) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        }
    }, [setUserData]);
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