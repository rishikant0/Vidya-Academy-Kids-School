import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  GraduationCap,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      
      {/* Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C480,140 960,20 1440,60 L1440,120 L0,120 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#6ea8ff" />
              <stop offset="100%" stopColor="#ff6ec7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap size={30} />
              </div>
              <div>
                <h3>Vidya Academy</h3>
                <span>Kids School</span>
              </div>
            </div>

            <p>
              Where little dreams take flight ✨. We provide a joyful,
              colorful and safe environment for kids to learn and grow.
            </p>

            {/* Social */}
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Classes */}
          <div className="footer-links">
            <h4>Our Classes</h4>
            <ul>
              <li>Pre Nursery</li>
              <li>Nursery</li>
              <li>LKG</li>
              <li>UKG</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul className="footer-contact-list">
              <li className="contact-item map">
                <div className="icon-box"><MapPin size={20} /></div>
                <span>Ranchi, Jharkhand</span>
              </li>
              <li className="contact-item phone">
                <div className="icon-box"><Phone size={20} /></div>
                <a href="tel:+916207383145">+91 62073 83145</a>
              </li>
              <li className="contact-item mail">
                <div className="icon-box"><Mail size={20} /></div>
                <a href="mailto:info@vidyaacademy.com">info@vidyaacademy.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© {new Date().getFullYear()} Vidya Academy. All Rights Reserved.</p>
          <p className="made-with">
            Made with <Heart size={16} fill="#ff6ec7" color="#ff6ec7" /> for Kids
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;