import React from 'react';
import styles from './Footer.module.css';
import { IoMdHeartHalf } from 'react-icons/io';

const Footer = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p>
            &copy; <a href="https://ameersampangrai.com.np">Raijin</a> 2024.{' '}
            <IoMdHeartHalf fontSize="20px" color="red" /> All rights reserved.
          </p>
        </div>
        {/* Scroll to top button */}
        <button onClick={scrollToTop} className={styles.toTopButton}>
          {props.icon} {props.text}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
