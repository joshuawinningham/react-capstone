import React, { useState } from "react";
import "./BookingForm.css";
import { fetchAPI } from "../../api"; // Import fetchAPI from the api file

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <section className="booking-section">
      <div className="booking-form-container">
        <form
          className="reservation-form"
          onSubmit={handleSubmit}>
          <h2>Reserve a Table</h2>
          <div className="form-field">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              value={date}
              onChange={handleDateChange}
              min={today}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required>
              <option value="">Select a time</option>
              {availableTimes &&
                availableTimes.map((availableTime) => (
                  <option
                    key={availableTime}
                    value={availableTime}>
                    {availableTime}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-button">
            Make Your reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
