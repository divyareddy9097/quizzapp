import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Loginpage.css";
const Login = (props) => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (email !== "" && pass !== "") {
      // Navigate to the desired route
      navigate("/start");
    } else {
      alert("Please enter your email and password.");
    } // Example: Navigate to the Admin page after login
  };
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div class="app">
      <div class="auth-form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
          />
          <label for="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button type="submit" onClick={handleStart}>
            Login
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("Register")}
        ></button>
      </div>
    </div>
  );
};
export default Login;
