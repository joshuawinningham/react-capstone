import React from "react";
import logoImage from "../assets/images/Logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img
        src={logoImage}
        alt="Little Lemon Logo"
      />
    </div>
  );
}

export default Logo;
