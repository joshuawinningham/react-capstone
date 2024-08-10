import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import HomePage from "./components/HomePage/HomePage.js";
// import AboutPage from "./components/AboutPage.js";
// import MenuPage from "./components/MenuPage.js";
import ReservationsPage from "./components/ReservationsPage/ReservationsPage.js";
// import OrderOnlinePage from "./components/OrderOnlinePage.js";
// import LoginPage from "./components/LoginPage.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        {/* <Route
          path="/about"
          element={<AboutPage />}
        /> */}
        {/* <Route
          path="/menu"
          element={<MenuPage />}
        /> */}
        <Route
          path="/reservations"
          element={<ReservationsPage />}
        />
        {/* <Route
          path="/order"
          element={<OrderOnlinePage />}
        /> */}
        {/* <Route
          path="/login"
          element={<LoginPage />}
        /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
