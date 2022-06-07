import React, { Component, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./login.css";
import checkLogin from "./LoginService";
import { withRouter } from "react-router-dom";

const Login = () => {
  // const state = {
  //   username: "",
  //   password: "",
  //   errorMessage: ""
  // };
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
    if (typeof userData != "undefined") {
      if (userData.username && userData.username.length > 0) {
        window.location.href = "/";
      }
    }
  }, []);

  const changeUserName = e => {
    const username = e.target.value;
    setUserName(username);
  };

  const changePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const submitLogin = () => {
    const loginResponse = checkLogin(username,password);
    if (loginResponse.isLoggedIn) {
      setError("");
      localStorage.setItem("userData", JSON.stringify(loginResponse.data));
      window.location.href = "/";
    } else {
      setError(
        "Sorry !! Invalid username and password"
      );
    }
  };


  return (
    <div className="d-flex justify-content-center login-area">
      <ToastContainer />
      <Card style={{ width: "30rem" }}>
        <h3 className="text-center mt-2 mb-2 text-uppercase">Login</h3>

        {error.length > 0 && (
          <Alert show={true} variant="danger" className="m-2">
            <p>{error}</p>
          </Alert>
        )}

        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={changeUserName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={changePassword}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                variant="primary"
                type="button"
                className="btn btn-primary btn-block text-uppercase"
                onClick={submitLogin}
              >
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );

}

export default Login;
