import React from 'react';
import MenuItemImage from './MenuItemImage';
import './MenuItem.css';

function MenuItem({ name, imageUrl, description, orderLink }) {
  return (
    <div className="menu-item">
      <MenuItemImage imageUrl={imageUrl} />
      <div className="menu-item-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={orderLink} target="_blank" rel="noopener noreferrer">
          Order Now
        </a>
      </div>
    </div>
  );
}

export default MenuItem;
