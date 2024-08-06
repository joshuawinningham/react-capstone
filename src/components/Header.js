import React from "react";
import Logo from "./Logo";
import Nav from "./Nav.js";

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
