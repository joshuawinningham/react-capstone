import React from "react";
import "./Specials.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import ElectricMopedIcon from "@mui/icons-material/ElectricMoped";
import greekSaladImg from "../../assets/images/greek_salad_512.jpg";
import bruschettaImg from "../../assets/images/bruchetta_512.jpg";
import lemonDessertImg from "../../assets/images/lemon_dessert.jpg";

const specials = [
  {
    title: "Greek salad",
    price: "$12.99",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    imgSrc: greekSaladImg,
    alt: "Greek salad",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    imgSrc: bruschettaImg,
    alt: "Bruschetta",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    imgSrc: lemonDessertImg,
    alt: "Lemon Dessert",
  },
];

const Specials = () => {
  return (
    <section className="specials-container">
      <header className="specials-header">
        <h2>This week&apos;s specials!</h2>
        <a href="/menu">
          <button className="online-menu-button">Online Menu</button>
        </a>
      </header>
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
              <strong>Order a delivery</strong> <ElectricMopedIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
