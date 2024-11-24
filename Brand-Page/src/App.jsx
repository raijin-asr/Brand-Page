import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navigation/Nav';
import Body from './components/Body/Body';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { LuArrowUpFromDot } from "react-icons/lu";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Pass props to Footer */}
        <Footer text="To Top" icon={<LuArrowUpFromDot />} />
      </div>
    </Router>
  );
};

export default App;
