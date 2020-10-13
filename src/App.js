import React from 'react';
import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div>
          <header className="header">
        <img
            src={logo}
            alt="Logo Space X"
            className="logo"
        />
        <nav className="main-nav nav">
          <ul className="list">
            <li className="item">
              <a href="#" className="item-link">Falcon 1</a>
            </li>
            <li className="item">
              <a href="#" className="item-link">Falcon 9</a>
            </li>
            <li className="item">
              <a href="#" className="item-link">Falcon Heavy</a>
            </li>
            <li className="item">
              <a href="#" className="item-link">Updates</a>
            </li>
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul className="list">
            <li className="item">
              <a href="#" className="item-link">Home</a>
            </li>
            <li className="item">
              <a href="calendar.html" className="item-link">Calendar</a>
            </li>
          </ul>
        </nav>
      </header>

      <section class="main">
      <h1 class="title">
        Falcon 1
      </h1>

      <div class="video-container">
        <video class="video" autoPlay loop muted src="./video/moon.mp4"></video>

      </div>
      </section>

  </div>

  );
}

export default App;
