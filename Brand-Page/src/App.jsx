import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div classname="logo">
          <img src="/vite.svg" alt="Logo" />
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
      <main className="bodyDiv container">
        <div className="bodyDiv-content">
          <h1>AMEER RAI</h1>
          <p>
            Welcome to my Brand Page. I am happy to see you here. I am a
          </p>

          <div className="bodyDiv-btn">
            <button>Read More </button>
            <button className="secondary-btn">Donate</button>
          </div>

          <div className="socailDiv">
            <p>My Social Media</p>

            <div className="social-icons">
              <img src="/vite.svg" alt="fb-logo" />
              <img src="/vite.svg" alt="linkedin-logo" />
            </div>
          </div>
        </div>
        <div className="bodyDiv-image">
          <img src="/vite.svg" alt="bodyDiv-image" />
        </div>
      </main>
    </>
  )
}

export default App
