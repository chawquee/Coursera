import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="middle">
        <nav className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderonline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <nav className="contact">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>E-mail</li>
          </ul>
        </nav>
        <nav className="social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Tiktok</li>
            <li>Instagram</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
