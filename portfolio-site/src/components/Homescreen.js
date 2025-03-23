import React from "react";
import "./Homescreen.css";
import shriya from "../assets/shriya.png";

const Homescreen = () => {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="nav-left">KIA ORA</div>
        <div className="nav-right">
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <div className="hero-content">
        <p className="category">BACHELOR OF TECHNOLOGY</p>
        <h1 className="title">SHRIYA WARNER</h1>
        <div className="author">
          <img src={shriya} alt="author" className="author-img" />
          <p>
            <em>By Shriya Warner 2025</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
