import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content" data-aos="fade-up">
          <span className="section-badge" style={{background: 'rgba(255,255,255,0.15)', color: 'var(--sunny-yellow)', border: '1px solid rgba(255,255,255,0.2)'}}>Contact</span>
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Reach out for any queries.</p>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="contact-content section">
        <div className="container contact-grid">
          <div className="contact-cards" data-aos="fade-right">
            <div className="contact-card">
              <div className="contact-icon" style={{background: 'linear-gradient(135deg, #F48FB1, #E91E63)'}}>
                <MapPin size={24} color="white" />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>RIMS Bariyatu Road, Ranchi, Jharkhand</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon" style={{background: 'linear-gradient(135deg, #FF7043, #D84315)'}}>
                <Phone size={24} color="white" />
              </div>
              <div>
                <h4>Phone Number</h4>
                <p><a href="tel:+916207383145" style={{color: 'inherit', textDecoration: 'none'}}>+91 6207383145</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon" style={{background: 'linear-gradient(135deg, #FFD54F, #FF9800)'}}>
                <Mail size={24} color="white" />
              </div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:kumarrishikant660@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>kumarrishikant660@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon" style={{background: 'linear-gradient(135deg, #81C784, #43A047)'}}>
                <Clock size={24} color="white" />
              </div>
              <div>
                <h4>Office Hours</h4>
                <p>Mon-Sat: 8:00 AM - 4:00 PM</p>
              </div>
            </div>

            <a href="https://maps.google.com/?q=RIMS+Ranchi" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginTop: '12px', width: '100%'}}>
              Get Directions <ExternalLink size={16} />
            </a>
          </div>

          <div className="map-container" data-aos="fade-left">
            <iframe
              title="School Location"
              src="https://maps.google.com/maps?q=RIMS%20Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
