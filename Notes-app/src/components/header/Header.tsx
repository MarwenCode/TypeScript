import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <h1>Note App</h1>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Notes</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  </nav>
  )
}

export default Header