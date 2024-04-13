/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import StoryDetail from '../components/StoryDetail';
import '../styles/Home.css'; // import home page styles
import heroImage from '../assets/images/hero-image.jpg'; // Import hero image


const Home = () => {
  const buttonStyle = {
    padding: '15px 30px',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    border: '2px solid transparent',
    cursor: 'pointer',
  };

  const handleButtonClick = () => {
    // Add functionality for button click event
    console.log('Button clicked!');
  };
  return (
    <div className="home">
      <main className="main-content">
        <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-content">
            <h1>Welcome to Evergreen</h1>
            <p>Discover our exquisite collection of tie and dye products</p>
            <a href="/products" className="btn btn-primary">Explore Now</a>
          </div>
        </section><br /><br />
        <section className="latest-updates-button"> {/* Add a section for the button */}
          <Link to="/latestupdate" className="btn btn-primary">See the latest updates here!!...</Link> {/* Create a button with Link component */}
        </section>
        <section className="story-detail">
          <StoryDetail />
        </section>
        
      </main>
    </div>
  );
}

export default Home;
