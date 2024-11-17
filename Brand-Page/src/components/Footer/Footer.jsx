import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; Ram 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
