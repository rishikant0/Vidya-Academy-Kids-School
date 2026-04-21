import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on link click
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      ref={navRef}
      className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container navbar">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">VA</div>
          <div>
            <span className="logo-name school-red">
              Vidya Acadmic
            </span>
            <span className="logo-tagline">Kids School</span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/facilities" onClick={closeMenu}>Facilities</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <NavLink to="/admission" className="nav-cta" onClick={closeMenu}>
            Admission
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;