const Nav =() => {
    return(
        <nav className="container">
        <div classname="logo">
          <img src="/icon.png" alt="Logo" />
        </div>
        <div classname="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <button>Login</button>
      </nav>
    );
};

export default Nav;