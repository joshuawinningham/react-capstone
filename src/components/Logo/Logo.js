import React from "react";
import logoImage from "../../assets/images/Logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <a
      href="/"
      className="logo">
      <img
        src={logoImage}
        alt="Little Lemon Logo"
      />
    </a>
  );
}

export default Logo;
