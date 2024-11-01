import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src="images/logoA.png" alt="Logo" />
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Nav items */}
      <ul className={isMenuOpen ? "active" : ""}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Nav;
