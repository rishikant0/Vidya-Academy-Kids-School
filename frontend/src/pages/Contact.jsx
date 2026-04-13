import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-hero">
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-hero-content"
          >
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Get In Touch</span>
            <h1>Contact Us</h1>
            <p>We would love to hear from you. Reach out for any queries or to schedule a school tour.</p>
          </motion.div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="contact-section section">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-info-grid"
            >
              <div className="trust-premium-card">
                <div className="card-inner" style={{ padding: '30px' }}>
                  <div className="icon-box bg-pink"><MapPin size={24} /></div>
                  <div className="info-text">
                    <h4>Our Location</h4>
                    <p>Vidyaa Academy Kids School, Near Akhada gym, Karam Chowk, Vidyanagar, Ranchi, Jharkhand</p>
                  </div>
                </div>
              </div>

              <div className="trust-premium-card">
                <div className="card-inner" style={{ padding: '30px' }}>
                  <div className="icon-box bg-blue"><Phone size={24} /></div>
                  <div className="info-text">
                    <h4>Phone Number</h4>
                    <p><a href="tel:+916207383145" className="contact-link">+91 6207383145</a></p>
                  </div>
                </div>
              </div>

              <div className="trust-premium-card">
                <div className="card-inner" style={{ padding: '30px' }}>
                  <div className="icon-box bg-green"><Mail size={24} /></div>
                  <div className="info-text">
                    <h4>Email Address</h4>
                    <p><a href="mailto:kumarrishikant660@gmail.com" className="contact-link">kumarrishikant660@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className="trust-premium-card">
                <div className="card-inner" style={{ padding: '30px' }}>
                  <div className="icon-box bg-yellow"><Clock size={24} /></div>
                  <div className="info-text">
                    <h4>Office Hours</h4>
                    <p>Mon - Sat: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Vidyaa+academy+kids+school+Near+Akhada+gym+karam+chowk+Vidyanagar+Ranchi" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                  Get Directions <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-map"
            >
              <div className="map-wrapper glass">
                <iframe
                  title="School Location"
                  src="https://maps.google.com/maps?q=Vidyaa%20academy%20kids%20school%20Near%20Akhada%20gym%20karam%20chowk%20Vidyanagar%20Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '450px', borderRadius: '30px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
