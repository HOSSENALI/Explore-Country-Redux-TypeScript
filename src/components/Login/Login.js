import React, { Component, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./login.css";
import checkLogin from "./LoginService";
import { withRouter } from "react-router-dom";
import { getUserData, SetPassword, SetUserName, UserLogin } from "../../redux/action/LoginActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { InputUserName, InputPassword, errorMessage ,isLogged} = useSelector((state) => state.LoginReducer);
console.log("hhhhh",isLogged);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
    console.log("data from Login",userData);
    if (typeof userData != "undefined") {
      if (userData.username && userData.password.length > 0) {
        window.location.href = "/";
      }
    }

  }, []);

  const changeUserName = (e) => {
    dispatch(SetUserName(e.target.value));
  };

  const changePassword = (e) => {
    dispatch(SetPassword(e.target.value));
  };

  const submitLogin = () => {
    dispatch(UserLogin(InputUserName, InputPassword));
  };


  return (
    <div className="d-flex justify-content-center login-area">
      <ToastContainer />
      <Card style={{ width: "30rem" }}>
        <h3 className="text-center mt-2 mb-2 text-uppercase">Login</h3>

        {errorMessage.length > 0 && (
          <Alert show={true} variant="danger" className="m-2">
            <p>{errorMessage}</p>
          </Alert>
        )}

        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={InputUserName}
                placeholder="Enter your username"
                onChange={changeUserName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={InputPassword}
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
