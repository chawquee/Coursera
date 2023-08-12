import React from 'react';
import './CustomerSay.css';

function CustomerSay() {
  return (
    <div className="customer-say">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial">
        <div className="rating">4.5</div>
        <div className="food-item">
          <img src="food-item-image-1.jpg" alt="Food Item" />
          <span className="food-item-name">Delicious Burger</span>
        </div>
        <p className="client-name">John Doe</p>
        <p className="client-comment">
          "The Delicious Burger was simply amazing. I can't wait to visit again!"
        </p>
      </div>
      {/* Repeat similar structure for other testimonials */}
    </div>
  );
}

export default CustomerSay;
