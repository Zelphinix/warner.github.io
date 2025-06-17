import React from "react";

import { Link } from "react-router-dom";

import "../Styles/Nav.css";

import NavDropdown from "./NavDropdown";

import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="nav-item">
          <HomeIcon className="nav-icon" />
          <span className="nav-label">Home</span>
        </span>
      </Link>
      <Link to="/projects">
        <span className="nav-item">
          <WorkIcon className="nav-icon" />
          <span className="nav-label">Project</span>
        </span>
      </Link>
      <Link to="/education">
        <span className="nav-item">
          <SchoolIcon className="nav-icon" />
          <span className="nav-label">Education</span>
        </span>
      </Link>
      <Link to="/about">
        <span className="nav-item">
          <PersonIcon className="nav-icon" />
          <span className="nav-label">About Me</span>
        </span>
      </Link>
      <Link to="/contact">
        <span className="nav-item">
          <EmailIcon className="nav-icon" />
          <span className="nav-label">Contact</span>
        </span>
      </Link>
      <div className="navbar-right">
        <NavDropdown />
      </div>
    </nav>
  );
};

export default Nav;
