import React from 'react'
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = () => {
  return (
    <div className="nb-section">
      <Link to="/" className="nb-logo nb-text">Woga</Link>
      <Link to="/about" className="nb-about nb-text">About</Link>
      <Link to="/resources" className="login nb-text">Resources</Link>
      <Link to="/admin" className="login nb-text">Admin</Link>
    </div>
  )
}

export default NavBar
