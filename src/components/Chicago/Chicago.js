import React from "react";
import "./Chicago.css";
import image1 from "../../assets/images/restaurant_chef_b.jpg";
import image2 from "../../assets/images/Mario_and_Adrian_a.jpg";

const Chicago = () => {
  return (
    <section
      className="container"
      aria-labelledby="chicagoTitle">
      <div className="textContainer">
        <h2
          id="chicagoTitle"
          className="title">
          Little Lemon
        </h2>
        <h3 className="subtitle">Chicago</h3>
        <p className="paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
          non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <aside
        className="imageContainer"
        aria-label="Restaurant images">
        <figure className="image1">
          <img
            src={image1}
            alt="Little Lemon restaurant chef preparing a dish"
            className="image"
          />
        </figure>
        <figure className="image2">
          <img
            src={image2}
            alt="Mario and Adrian, the founders of Little Lemon"
            className="image"
          />
        </figure>
      </aside>
    </section>
  );
};

export default Chicago;
