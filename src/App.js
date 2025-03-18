import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/en/Navbar';
import Footer from './components/en/Footer';
import Home from './pages/en/Home';
import About from './pages/en/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
