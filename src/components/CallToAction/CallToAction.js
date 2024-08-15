import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/Hero_image_3423.jpg";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title">Little Lemon</h1>
          <p className="hero-subtitle">Chicago</p>
          <p className="hero-description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <div className="cta-container">
            <Link
              to="/reservations"
              className="cta-button"
              role="button"
              aria-label="Reserve a table at Little Lemon">
              Reserve a Table
            </Link>
          </div>
        </div>
        <figure
          className="hero-image"
          aria-label="Showcase of Little Lemon's dishes">
          <img
            src={HeroImage}
            alt="Assortment of Little Lemon Restaurant's signature dishes"
          />
        </figure>
      </div>
    </section>
  );
};

export default CallToAction;
