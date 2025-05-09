import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="BanquetHall Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon className='icon' icon={menuOpen ? faTimes : faBars} size="lg" />
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Venues</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Photos</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">List Your Business</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
