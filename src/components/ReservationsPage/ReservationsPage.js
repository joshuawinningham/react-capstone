import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm, { initializeTimes } from "../BookingForm/BookingForm";
import HeroImage from "../HeroImage/HeroImage";
import { fetchAPI, submitAPI } from "../../api"; // Import both API functions

const ReservationsPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize times when the component mounts
    setAvailableTimes(initializeTimes());
  }, []);

  const updateTimes = useCallback((selectedDate) => {
    const date = new Date(selectedDate);
    const newAvailableTimes = fetchAPI(date);
    setAvailableTimes(newAvailableTimes);
  }, []);

  const submitForm = useCallback(
    (formData) => {
      // Here you would typically send the data to an API
      const success = submitAPI(formData);
      if (success) {
        console.log("Form submitted:", formData);
        navigate("/booking-confirmation"); // Navigate to the confirmation page
      } else {
        alert("Booking submission failed. Please try again.");
      }
    },
    [navigate]
  );

  return (
    <main className="reservations-page">
      <HeroImage />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </main>
  );
};

export default ReservationsPage;
