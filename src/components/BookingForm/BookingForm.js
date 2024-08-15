import React, { useState, useEffect, useCallback } from "react";
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
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    let errors = {};
    let formIsValid = true;

    // Date validation
    if (!date) {
      formIsValid = false;
      errors["date"] = "Please select a date";
    } else {
      const selectedDate = new Date(date);
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 30);
      if (selectedDate < new Date(today) || selectedDate > maxDate) {
        formIsValid = false;
        errors["date"] = "Please select a date within the next 30 days";
      }
    }

    // Time validation
    if (!time) {
      formIsValid = false;
      errors["time"] = "Please select a time";
    }

    // Guests validation
    if (!guests || guests < 1 || guests > 10) {
      formIsValid = false;
      errors["guests"] = "Please enter a number between 1 and 10";
    }

    setErrors(errors);
    setIsFormValid(formIsValid);
  }, [date, time, guests, today]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <section
      className="booking-section"
      aria-label="Table Reservation">
      <div className="booking-form-container">
        <form
          className="reservation-form"
          onSubmit={handleSubmit}>
          <h2>Reserve a Table</h2>
          <fieldset>
            <legend>Reservation Details</legend>
            <div className="form-field">
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                name="res-date"
                value={date}
                onChange={handleDateChange}
                min={today}
                max={new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split("T")[0]}
                required
                aria-required="true"
                aria-invalid={errors.date ? "true" : "false"}
                aria-describedby="date-error"
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                name="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required>
                aria-required="true" aria-invalid={errors.time ? "true" : "false"}
                aria-describedby="time-error"
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
              {errors.time && <span className="error">{errors.time}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                step="1"
                id="guests"
                name="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                required
                aria-required="true"
                aria-invalid={errors.guests ? "true" : "false"}
                aria-describedby="guests-error"
              />
              {errors.guests && <span className="error">{errors.guests}</span>}
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
          </fieldset>
          <button
            type="submit"
            className="submit-button"
            disabled={!isFormValid}
            aria-label="Make Reservation">
            Make Your reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
