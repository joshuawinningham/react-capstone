import React from "react";
import "./Chicago.css";
import image1 from "../../assets/images/restaurant_chef_b.jpg";
import image2 from "../../assets/images/Mario_and_Adrian_a.jpg";

const Chicago = () => {
  return (
    <article className="container">
      <header className="textContainer">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
          non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </header>
      <aside className="imageContainer">
        <figure className="image1">
          <img
            src={image1}
            alt="Restaurant Chef"
            className="image"
          />
        </figure>
        <figure className="image2">
          <img
            src={image2}
            alt="Mario and Adrian"
            className="image"
          />
        </figure>
      </aside>
    </article>
  );
};

export default Chicago;
