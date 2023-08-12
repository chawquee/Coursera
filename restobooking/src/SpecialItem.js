import React from 'react';
import './Specials.css';

function SpecialItem({ name, imageUrl, explanation, price, orderLink }) {
  return (
    <div className="special-item">
      <img src={imageUrl} alt={name} className="special-item-image" />
      <div className="special-item-details">
        <h3>{name}</h3>
        <p className="explanation">{explanation}</p>
        <div className="price-details">
          <span className="price-label">Price:</span>
          <span className="price">{price}</span>
        </div>
        <p className="order-link">
          <a href={orderLink} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </p>
      </div>
    </div>
  );
}

export default SpecialItem;
