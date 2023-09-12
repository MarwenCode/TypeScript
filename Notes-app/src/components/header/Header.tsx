import React, { useState, useContext } from 'react';
import { ContextApp } from '../../context';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ContextApp)
 
 

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Note App</h1>
      </div>
      <ul className="navbar-links">
        <li className="item">
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="createNote">Create Note</Link>
        </li>
        <li className="item">
          <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Header;


