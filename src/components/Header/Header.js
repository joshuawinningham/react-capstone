import React from "react";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";
import "./Header.css";

function Header() {
  return (
    <header
      className="header"
      aria-label="Main header">
      <div className="header-content">
        <Logo />
        <Nav
          aria-label="Main navigation"
          role="navigation"
        />
      </div>
    </header>
  );
}

export default Header;
