import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import Specials from "../Specials/Specials";
import "./HomePage.css";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago/Chicago";

const HomePage = () => {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      {/* Other components */}
    </main>
  );
};

export default HomePage;
