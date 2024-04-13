/* eslint-disable no-unused-vars */
// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // import footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Who we are</p>
          <p>About Our Platform </p>
          <p>Sustainable Milestones</p>
          <p>What We Offer</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {/* Add more quick links if necessary */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: ever1998green@gmail.com</p>
          <p>Phone: +1 123-456-7890</p>
          {/* Add more contact information if necessary */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ever Green. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
