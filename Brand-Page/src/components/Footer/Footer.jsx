import React from 'react';
import styles from './Footer.module.css';
import {IoMdHeartHalf} from 'react-icons/io';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; <a href="https://ameersampangrai.com.np">Raijin</a> 2024. <IoMdHeartHalf fontSize="20px" color="red"/> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
