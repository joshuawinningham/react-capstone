import React from "react";
import "./CustomerSay.css"; // Ensure you have corresponding CSS for styling

const testimonials = [
  {
    name: "Sara Lopez",
    username: "Sara72",
    content: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!",
    rating: 5,
  },
  {
    name: "Jon Do",
    username: "Johnny_Utah",
    content: "We had such a great time celebrating my grandmother's birthday!",
    rating: 5,
  },
  {
    name: "Sara Lopez",
    username: "Sara72",
    content: "Best Feta Salad in town. Flawless everytime!",
    rating: 5,
  },
  {
    name: "Sara Lopez",
    username: "Sara72",
    content: "Such a chilled out atmosphere - love it!",
    rating: 5,
  },
];

const CustomersSay = () => {
  const getStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="testimonial-card">
            <div
              className="testimonial-stars"
              aria-label={`${testimonial.rating} out of 5 stars`}>
              {getStars(testimonial.rating)}
            </div>
            <header className="testimonial-header">
              <div
                className="avatar-placeholder"
                aria-hidden="true"></div>
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-username">@{testimonial.username}</p>
              </div>
            </header>
            <blockquote className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
