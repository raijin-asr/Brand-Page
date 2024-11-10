import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Navigation/Nav'
import Body from './components/Body/Body'
import Contact from './components/Contact/Contact';
// import About from './components/About/About';
// import Services from './components/Services/Services';

const App =() => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> */}
        </Routes>
      </Router>      
    </div>
  );
};

export default App
