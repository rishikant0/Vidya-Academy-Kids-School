import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content animate-fade-in">
        <div className="footer-section">
          <h3>
            <span style={{ color: 'var(--primary-pink)' }}>V</span>
            <span style={{ color: 'var(--primary-blue)' }}>i</span>
            <span style={{ color: 'var(--primary-yellow)' }}>d</span>
            <span style={{ color: 'var(--primary-green)' }}>y</span>
            <span style={{ color: 'var(--primary-pink)' }}>a</span>
            {' '}Academy Kids School
          </h3>
          <p>A joyful place for learning, growth, and creativity. We provide a safe, caring, and friendly environment for your little ones.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/admission">Admission</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><MapPin size={18} color="var(--primary-pink)" /> RIMS Bariyatu Road Ranchi jharkhand</li>
            <li><Phone size={18} color="var(--primary-blue)" /> +91 6207383145</li>
            <li><Mail size={18} color="var(--primary-yellow)" /> kumarrishikant660@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vidya Academy Kids School. All rights reserved.</p>
        <p className="made-with">Made with <Heart size={14} color="var(--primary-pink)" fill="var(--primary-pink)" /> for kids</p>
      </div>
    </footer>
  );
};

export default Footer;
