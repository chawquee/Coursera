import React from 'react';
import './Chicago.css';

function Chicago() {
  return (
    <div className="chicago">
      <div className="restaurant-title">
        <h2>Little Lemon</h2>
        <p>Chicago</p>
      </div>
      <div className="restaurant-images">
        <img src="restaurant-image-1.jpg" alt="Restaurant Exterior" className="image-1" />
        <img src="restaurant-image-2.jpg" alt="Restaurant Interior" className="image-2" />
      </div>
      <div className="restaurant-intro">
        <p>
          Welcome to Little Lemon, your ultimate dining destination in the heart of Chicago.
          We pride ourselves on offering a diverse menu of exquisite dishes in a cozy and
          welcoming atmosphere. Our experienced chefs use only the finest ingredients to
          create culinary delights that will leave your taste buds craving for more.
        </p>
        <p>
          Whether you're looking for a casual brunch, a romantic dinner, or a special
          celebration, Little Lemon has something for everyone. We are dedicated to providing
          an exceptional dining experience, backed by attentive service and a passion for
          delivering unforgettable flavors.
        </p>
      </div>
    </div>
  );
}

export default Chicago;
