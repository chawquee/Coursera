
  import React from 'react';
  import './CallToAction.css';
  
  function CallToAction() {
    return (
      <div className="call-to-action">
        <div className="cta-text">
          <h2 className="cta-title">Little Lemon</h2>
          <p className="cta-location">Chicago</p>
          <p className="cta-intro">
            Welcome to Little Lemon, a cozy restaurant that offers the finest dining experience in the heart of Chicago.
          </p>
          <button className="cta-button">Reserve A Table</button>
        </div>
        <img src="restaurant-image.jpg" alt="Restaurant" className="cta-image" />
      </div>
    );
  }
  
  export default CallToAction;
  