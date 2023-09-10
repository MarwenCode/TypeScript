import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-brand">
        <h1>Note App</h1>
      </div>
      <ul className="navbar-links">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="createNote">Create Note</Link>
        </li>
        <li className="item">
          <label className="switch">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Header;


