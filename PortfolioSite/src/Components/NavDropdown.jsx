import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../Styles/NavDropdown.css";

import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

function NavDropdown() {
  // open/close dropdown
  const [open, setOpen] = useState(false);

  // ref the dropdown
  const dropdownRef = useRef(null);

  useEffect(function () {
    // for dropdown, close it when clicking elsewhere (accessibility/comfort)
    function handleClickOutside(event) {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    }

    // actual mouse clicks
    document.addEventListener("mousedown", handleClickOutside);

    // dont wait if the component ain't there
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // toggle dropdown
  function toggleDropdown() {
    setOpen(!open);
  }

  // close dropdown
  function closeDropdown() {
    setOpen(false);
  }

  // actual dropdown, shown when =true
  let dropdownMenu = null;

  if (open) {
    dropdownMenu = (
      <div className="nav-dropdown-menu">
        {/*goes to item and closes menu*/}
        <Link to="/" onClick={closeDropdown}>
          <span className="nav-item">
            <HomeIcon className="nav-icon" />
            <span className="nav-label">Home</span>
          </span>
        </Link>

        <Link to="/about" onClick={closeDropdown}>
          <span className="nav-item">
            <PersonIcon className="nav-icon" />
            <span className="nav-label">About Me</span>
          </span>
        </Link>

        <Link to="/projects" onClick={closeDropdown}>
          <span className="nav-item">
            <WorkIcon className="nav-icon" />
            <span className="nav-label">Projects</span>
          </span>
        </Link>

        <Link to="/education" onClick={closeDropdown}>
          <span className="nav-item">
            <SchoolIcon className="nav-icon" />
            <span className="nav-label">Education</span>
          </span>
        </Link>

        <Link to="/contact" onClick={closeDropdown}>
          <span className="nav-item">
            <EmailIcon className="nav-icon" />
            <span className="nav-label">Contact</span>
          </span>
        </Link>
      </div>
    );
  }

  // main container
  return (
    <div className="nav-dropdown" ref={dropdownRef}>
      {/* toggle dropdown */}
      <button
        className="nav-dropdown-toggle"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={open}
      >
        ☰
      </button>
      {dropdownMenu}
    </div>
  );
}

export default NavDropdown;
