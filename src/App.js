import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import HomePage from "./components/HomePage/HomePage.js";
import ReservationsPage from "./components/ReservationsPage/ReservationsPage.js";
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/reservations"
          element={<ReservationsPage />}
        />
        <Route
          path="/booking-confirmation"
          element={<ConfirmedBooking />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
