/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // import header styles
import logo from '../assets/images/logo.jpg'; // Import your logo image

const Header = ({ authenticated }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Anuprarna" className="logo" />
        <span className="company-name">EVER GREEN</span>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li className="nav-item">{localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/signup' style={{ textDecoration: 'none' }}><button>Login</button></Link>}</li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
      <div className="header-icons">
        <button className="search-button"><i className="fas fa-search"></i></button>
        <button className="user-button"><i className="fas fa-user"></i></button>
      </div>
    </header>
  );
}

export default Header;
