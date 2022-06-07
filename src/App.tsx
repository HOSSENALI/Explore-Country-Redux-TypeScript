import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import About from "./components/views/About";
import Details from "./components/views/Details";
import Welcome from "./components/views/Welcome";
import Counter from "./Counter/Counter";
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    // @ts-ignore
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
    <BrowserRouter>
      <Navigation />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
