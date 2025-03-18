import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/en/Navbar';
import Footer from './components/en/Footer';
import Home from './pages/en/Home';
import About from './pages/en/About';
import ScrollToTop from "./components/ScrollToTop";
import Insurance from './pages/en/Insurance';
import Services from './pages/en/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
