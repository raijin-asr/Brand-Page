import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="images/logoA.png" alt="Logo" />
      </div>

      {/* Hamburger menu icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Nav items */}
      <ul className={isMenuOpen ? styles.active : ""}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li> */}
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Nav;
