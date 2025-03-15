import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Nav.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button 
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <ul className={`nav-links ${isMenuOpen ? "menu-open" : ""}`}>
        <li>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/reservations"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}>
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to="/order"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}>
            Order Online
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
