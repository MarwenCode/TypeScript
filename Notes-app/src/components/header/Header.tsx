import React from 'react';
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <h1>Note App</h1>
    </div>
    <ul className="nav-links">
    <Link to="/" >
              <li className="item">Home</li>
            </Link>
    <Link to="createNote" >
              <li className="item">create Note</li>
            </Link>
   
    </ul>
  </nav>
  )
}

export default Header