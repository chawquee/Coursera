import React from 'react';
import SpecialItem from './SpecialItem';
import './Specials.css';

function Specials() {
  return (
    <div className="specials">
      <h2 className="specials-title">Today's Specials</h2>
      <button className="online-menu-button">Online Menu</button>
      <SpecialItem
        name="Special Burger"
        imageUrl="burger-image.jpg"
        explanation="Our signature burger with secret sauce."
        price="$8.99"
        orderLink="https://example.com/order/burger"
      />
      {/* Repeat the SpecialItem component for other items */}
    </div>
  );
}

export default Specials;
