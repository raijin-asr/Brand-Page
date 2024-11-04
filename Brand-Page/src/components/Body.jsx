const Body = () => {
  return (
    <main className="bodyDiv container">
      <div className="bodyDiv-content">
        <h1>AMEER RAI</h1>
        <p>
          Welcome to my Brand Page. I am happy to see you here.
        </p>

        <div className="bodyDiv-btn">
          <button>Read More</button>
          <button className="secondary-btn">Donate</button>
        </div>

        <div className="socialDiv">
          <p>Reach me at:</p>

          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bodyDiv-image">
        <img src="images/messi1.jpg" alt="bodyDiv-image" />
      </div>
    </main>
  );
};

export default Body;
