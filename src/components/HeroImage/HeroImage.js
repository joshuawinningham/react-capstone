import React from "react";
import heroImage from "../../assets/images/greek_salad_5760.jpg";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <section
      className="hero-image-section"
      aria-labelledby="hero-image-title"
      style={{ backgroundImage: `url(${heroImage})` }}>
      <div
        className="hero-image-overlay"
        aria-hidden="true"></div>
      <div className="hero-image-content">
        <div className="hero-image-text">
          <h1
            id="hero-image-title"
            className="hero-image-title">
            Reserve a Table
          </h1>
          <p className="hero-image-subtitle">Enjoy our Mediterranean cuisine in a cozy atmosphere</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
