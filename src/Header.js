import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main'>
    <div className='main-container'>
    <div className='header-container'>
      <div className='logo-container'>
        <h2>Fena</h2>
      </div>
      <div>
      <ul className="menu-container">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/service">Service </Link>
            </li>
            </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header