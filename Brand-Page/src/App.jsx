import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Navigation/Nav'
import Body from './components/Body/Body'
import Contact from './components/Contact/Contact';


const App =() => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>      
    </div>
  );
};

export default App
