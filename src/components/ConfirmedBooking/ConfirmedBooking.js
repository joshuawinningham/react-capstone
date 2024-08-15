import React from "react";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  return (
    <section
      className="confirmed-booking"
      aria-labelledby="confirmation-title">
      <header className="confirmed-booking__header">
        <h1
          id="confirmation-title"
          className="confirmed-booking__title">
          Booking Confirmed!
        </h1>
      </header>
      <main className="confirmed-booking__main">
        <p className="confirmed-booking__text">Your booking has been successfully confirmed. We look forward to seeing you!</p>
      </main>
      <footer className="confirmed-booking__footer">
        <nav
          className="confirmed-booking__nav"
          aria-label="Post-confirmation navigation">
          <ul className="confirmed-booking__nav-list">
            <li>
              <a
                href="/"
                aria-label="Return to homepage">
                Back to Home
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default ConfirmedBooking;
