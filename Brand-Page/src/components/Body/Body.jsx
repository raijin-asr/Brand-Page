import styles from './Body.module.css';

const Body = () => {
  return (
    <main className={`${styles.bodyDiv} container`}>
      <div className={styles.bodyDivContent}>
        <h1>AMEER RAI</h1>
        <p>
          Welcome to my Brand Page. I am happy to see you here.
        </p>

        <div className={styles.bodyDivBtn}>
          <button>Read More</button>
          <button className={styles.secondaryBtn}>Donate</button>
        </div>

        <div className={styles.socialDiv}>
          <p>Reach me at:</p>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bodyDivImage}>
        <img src="images/messi1.jpg" alt="bodyDiv-image" />
      </div>
    </main>
  );
};

export default Body;
