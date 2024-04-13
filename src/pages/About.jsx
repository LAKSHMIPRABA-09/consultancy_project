/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/About.css'; // Import about page styles
import Image from '../assets/images/images.jpg'
const About = () => {
  return (
    <div className="about-us-container">
  <div className="content">
    <h2>About Us</h2>
    <p>Ever Green ensures fair wages, safe conditions, and respect for artisans. 
      We prioritize their well-being in home-based settings. 
      Alongside this, we're committed to eco-friendly practices, preserving traditional crafts, and nurturing culture to minimize our environmental impact.</p>

<p>Ever Green values traditional crafts and their cultural significance. 
We're dedicated to preserving and promoting these crafts for future generations. 
Our aim is to be a positive, sustainable, socially responsible company empowering artisans, preserving culture, and caring for the earth to create a brighter future for all.</p>
  </div>
  <div className="image">
    <img src={Image} alt="About Us Image"/>
  </div>
</div>

  );
}

export default About;
