import React from "react";
import logoImage from "../assets/images/Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img
            src={logoImage}
            alt="Little Lemon logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Address: 123 Main St, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h3>Social Media Links</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
