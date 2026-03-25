import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="container navbar animate-fade-in">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">
              <span style={{color: 'var(--primary-pink)'}}>V</span>
              <span style={{color: 'var(--primary-blue)'}}>i</span>
              <span style={{color: 'var(--primary-yellow)'}}>d</span>
              <span style={{color: 'var(--primary-green)'}}>y</span>
              <span style={{color: 'var(--primary-pink)'}}>a</span>
              {' '}Academy <span style={{fontSize: '0.8em', color: 'var(--text-light)'}}>Kids School</span>
            </span>
          </Link>
        </div>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/facilities" onClick={() => setIsOpen(false)}>Facilities</NavLink>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
          <NavLink to="/admission" className="nav-highlight" onClick={() => setIsOpen(false)}>Admission</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} color="var(--text-dark)" /> : <Menu size={28} color="var(--text-dark)" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
