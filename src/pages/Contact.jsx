/* eslint-disable no-unused-vars */
// Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import contact page styles
import contact from '../assets/images/contact.jpg';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={contact} alt="Contact" />
      </div>
    </div>
  );
}

export default Contact;
