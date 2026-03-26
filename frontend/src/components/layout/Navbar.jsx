import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <div className="logo-icon">VA</div>
            <div className="logo-text-wrap">
              <span className="logo-name"><span className="highlight">Vidya</span> Academy</span>
              <span className="logo-tagline">Kids School</span>
            </div>
          </Link>
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/facilities" onClick={closeMenu}>Facilities</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/admission" className="nav-cta" onClick={closeMenu}>Admission</NavLink>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={26} color="var(--text-dark)" /> : <Menu size={26} color="var(--text-dark)" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
