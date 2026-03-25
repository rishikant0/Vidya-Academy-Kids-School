import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-header section text-center">
        <div className="container">
          <h1 className="section-title" data-aos="fade-down">Contact Us</h1>
          <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">We would love to hear from you. Reach out to us for any queries.</p>
        </div>
      </section>

      <section className="contact-content-section section">
        <div className="container contact-grid">
          
          <div className="contact-info-cards" data-aos="fade-right">
            <div className="contact-card">
              <div className="contact-icon icon-pink"><MapPin size={32} color="var(--text-white)" /></div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>RIMS Ranchi</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon icon-blue"><Phone size={32} color="var(--text-white)" /></div>
              <div className="contact-details">
                <h3>Phone Number</h3>
                <p>+91 6207383145<br/>+91 12345 67890</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon icon-yellow"><Mail size={32} color="var(--text-dark)" /></div>
              <div className="contact-details">
                <h3>Email Address</h3>
                <p>kumarrishikant660@gmail.com<br/>aprk0527@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon icon-green"><Clock size={32} color="var(--text-dark)" /></div>
              <div className="contact-details">
                <h3>Office Hours</h3>
                <p>Mon-Sat: 8:00 AM - 4:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="map-container" data-aos="fade-left">
            <iframe 
              title="Vidya Academy Kids School Location"
              src="https://maps.google.com/maps?q=RIMS%20Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '480px' }} 
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
