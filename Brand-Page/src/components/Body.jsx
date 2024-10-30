const Body = () => {
    return (
        <main className="bodyDiv container">
        <div className="bodyDiv-content">
          <h1>AMEER RAI</h1>
          <p>
            Welcome to my Brand Page. I am happy to see you here. 
          </p>

          <div className="bodyDiv-btn">
            <button>Read More </button>
            <button className="secondary-btn">Donate</button>
          </div>

          <div className="socailDiv">
            <p>My Social Media</p>

            <div className="social-icons">
              <img src="/favicon.png" alt="fb-logo" />
              <img src="/favicon.png" alt="linkedin-logo" />
            </div>
          </div>
        </div>
        <div className="bodyDiv-image">
          <img src="/messi1.jpg" alt="bodyDiv-image" />
        </div>
      </main>
    );
};

export default Body;