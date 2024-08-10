import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/Hero_image_3423.jpg";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <header className="hero">
      <div className="container">
        <article className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <nav>
            <Link
              to="/reservations"
              className="cta-button">
              Reserve a Table
            </Link>
          </nav>
        </article>
        <figure className="hero-image">
          <img
            src={HeroImage}
            alt="Little Lemon Restaurant Food"
          />
        </figure>
      </div>
    </header>
  );
};

export default CallToAction;
