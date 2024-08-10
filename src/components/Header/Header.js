import React from "react";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
