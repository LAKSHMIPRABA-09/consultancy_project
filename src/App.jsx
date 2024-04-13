/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Signup from './pages/Signup';
import SingleProduct from './pages/SingleProduct'; // Adjust the path as necessary
import DyeingTypes from './components/DyeingTypes';
// Create a NotFound component for handling 404 errors
import './styles/Global.css';
import './App.css';
import Contact from './pages/Contact';
import About from './pages/About';
import LatestUpdate from './components/LatestUpdate';
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = (status) => {
    setAuthenticated(status);
  };
  return (
    <Router>
      <div className="App">
        <Header authenticated={authenticated}/>
      
          <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route path="/products" element={<Product/>} /> {/* Assign Product component to /products route */}
            <Route path="/about" element={<About/>} /> {/* Assign About component to /about route */}
            <Route path="/contact" element={<Contact/>} /> {/* Assign Contact component to /contact route */}
            <Route path="/signup" element={<Signup onAuthentication={handleAuthentication}/>} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/dyeing-types" element={<DyeingTypes/>} />
            <Route path="/latestupdate" element={<LatestUpdate />} />
          </Routes>
     
        <Footer />
      </div>
    </Router>
  );
}

export default App;
