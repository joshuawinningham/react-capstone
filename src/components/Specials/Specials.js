import React from "react";
import "./Specials.css";
import ElectricMopedIcon from "@mui/icons-material/ElectricMoped";
import lemonDessertImg from "../../assets/images/lemon_dessert.jpg";

const specials = [
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imgSrc: lemonDessertImg,
    alt: "Lemon Dessert",
  },
];

const Specials = () => {
  return (
    <section
      className="specials-container"
      aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2>This week&apos;s specials!</h2>
        <a href="/menu">
          <button className="online-menu-button">Online Menu</button>
        </a>
      </div>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <article
            key={index}
            className="special-item">
            <div className="special-img-container">
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="special-img"
              />
            </div>
            <div className="special-title-price">
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
            </div>
            <p className="special-description">{item.description}</p>
            <a
              href="/order"
              className="order-link">
              <strong>Order a delivery</strong> <ElectricMopedIcon aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
