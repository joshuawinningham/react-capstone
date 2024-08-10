import React from "react";
import "./Footer.css";
import logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <a href="/">
            <img
              src={logo}
              alt="Little Lemon Logo"
              className="footer-logo"
            />
          </a>
        </div>

        <nav className="footer-column">
          <h3>Navigation</h3>
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
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>

        <address className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>123 Main St, City</li>
            <li>
              Phone: <a href="tel:+11234567890">(123) 456-7890</a>
            </li>
            <li>
              Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </li>
          </ul>
        </address>

        <nav className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li>
              <a
                href="#"
                aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Twitter">
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
