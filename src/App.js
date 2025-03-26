import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './style.css';
import Navbar from './components/en/Navbar';
import ArNavbar from './components/ar/Navbar'; // Arabic Navbar
import Footer from './components/en/Footer';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/en/Home';
import About from './pages/en/About';
import Insurance from './pages/en/Insurance';
import Services from './pages/en/Services';
import Contact from './pages/en/Contact';
import Locations from './pages/en/Locations';

import ArHome from './pages/ar/Home';
import ArAbout from './pages/ar/About';
import ArInsurance from './pages/ar/Insurance';
import ArServices from './pages/ar/Services';
import ArContact from './pages/ar/Contact';
import ArLocations from './pages/ar/Locations';

function Layout() {
  const location = useLocation();
  const isArabic = location.pathname.startsWith('/ar');

  return (
    <>
      <ScrollToTop />
      {isArabic ? <ArNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/ar" element={<ArHome />} />
        <Route path="/ar-about" element={<ArAbout />} />
        <Route path="/ar-insurance" element={<ArInsurance />} />
        <Route path="/ar-services" element={<ArServices />} />
        <Route path="/ar-contact" element={<ArContact />} />
        <Route path="/ar-locations" element={<ArLocations />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;