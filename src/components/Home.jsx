import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import home_img from "../images/home_image.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the desired route
    navigate("/login"); // Example: Navigate to the Admin page after login
  };
  return (
    <div className="home">
      <div className="home_container">
        <div className="section_left">
          <div className="heading">
            <h2 className="gap">Best Online Quiz Platform</h2>
          </div>

          <h2 className="heading2">By Nature Programming</h2>

          <div className="button_div">
            <br />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
        <div className="section_right">
          <img className="home_img" src={home_img} alt="HomeImage" />
        </div>
      </div>
      <div className="info" _div>
        <p className="info">
          This is the Online Platform for students and other persons to play
          quiz for different
        </p>
        <p className="info"> categories.</p>
      </div>
    </div>
  );
};

export default Home;
