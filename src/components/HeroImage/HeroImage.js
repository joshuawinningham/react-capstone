import React from "react";
import heroImage from "../../assets/images/greek_salad_5760.jpg";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <header
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Reserve a Table</h1>
          <p className="hero-subtitle">Enjoy our Mediterranean cuisine in a cozy atmosphere</p>
        </div>
      </div>
    </header>
  );
};

export default HeroImage;
