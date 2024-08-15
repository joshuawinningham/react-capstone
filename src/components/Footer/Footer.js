import React from "react";
import "./Footer.css";
import logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Site footer">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <a
            href="/"
            aria-label="Home">
            <img
              src={logo}
              alt="Little Lemon Logo"
              className="footer-logo"
            />
          </a>
        </div>

        <nav
          className="footer-column"
          aria-label="Footer navigation">
          <h3 id="nav-heading">Navigation</h3>
          <ul aria-labelledby="nav-heading">
            <li>
              <a
                href="/"
                aria-label="Home page">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="About page">
                About
              </a>
            </li>
            <li>
              <a
                href="/menu"
                aria-label="Menu page">
                Menu
              </a>
            </li>
            <li>
              <a
                href="/reservations"
                aria-label="Reservations page">
                Reservations
              </a>
            </li>
            <li>
              <a
                href="/order"
                aria-label="Order online page">
                Order Online
              </a>
            </li>
            <li>
              <a
                href="/login"
                aria-label="Login page">
                Login
              </a>
            </li>
          </ul>
        </nav>

        <address
          className="footer-column"
          aria-label="Contact information">
          <h3 id="contact-heading">Contact</h3>
          <ul aria-labelledby="contact-heading">
            <li>123 Main St, City</li>
            <li>
              Phone:{" "}
              <a
                href="tel:+11234567890"
                aria-label="Call us at (123) 456-7890">
                (123) 456-7890
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:info@littlelemon.com"
                aria-label="Email us at info@littlelemon.com">
                info@littlelemon.com
              </a>
            </li>
          </ul>
        </address>

        <nav
          className="footer-column"
          aria-label="Social media links">
          <h3 id="social-heading">Connect</h3>
          <ul aria-labelledby="social-heading">
            <li>
              <a
                href="#"
                aria-label="Visit our Facebook page">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Visit our Instagram profile">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Visit our Twitter profile">
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
