import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  GraduationCap,
} from "lucide-react";

// ✅ Social icons (FIXED)
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

      {/* 🔥 Wave Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="#1a1a2e"
          />
        </svg>
      </div>

      {/* 🔷 MAIN FOOTER */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* 🔶 BRAND */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3>Vidya Academy</h3>
                <span>Kids School</span>
              </div>
            </div>

            <p>
              A joyful place for learning, growth, and creativity. Nurturing young
              minds with love and care.
            </p>

            {/* 🔥 SOCIAL ICONS */}
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* 🔶 QUICK LINKS */}
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

          {/* 🔶 PROGRAMS */}
          <div className="footer-links">
            <h4>Programs</h4>
            <ul>
              <li>Pre Nursery</li>
              <li>Nursery</li>
              <li>LKG</li>
              <li>UKG</li>
              
            </ul>
          </div>

          {/* 🔶 CONTACT */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><MapPin size={16} /> Ranchi, Jharkhand</li>
              <li><Phone size={16} /> <a href="tel:+919709539991">+91 97095 39991</a></li>
              <li><Mail size={16} /> <a href="mailto:kumarrishikant660@gmail.com">kumarrishikant660@gmail.com</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* 🔷 BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vidya Academy Kids School
        </p>

        <p className="made-with">
          Made with <Heart size={14} color="#ff4081" fill="#ff4081" />
        </p>
      </div>

    </footer>
  );
};

export default Footer;