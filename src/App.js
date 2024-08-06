import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <Footer />
      </>
    </Router>
  );
}

export default App;
