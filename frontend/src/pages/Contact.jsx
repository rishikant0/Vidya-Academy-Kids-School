import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, MessageSquare, User, Smartphone, Sparkles, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsLoading(false);
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Failed to send.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg("Failed to send. Please contact us directly at +91 6207383145.");
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="contact-page">
      {/* Premium Hero Section */}
      <section className="contact-hero-premium">
        {/* Animated Background Layers */}
        <div className="hero-bg-layers">
          <div className="bg-gradient-mesh"></div>
          <div className="bg-blob blob-purple"></div>
          <div className="bg-blob blob-pink"></div>
          <div className="bg-blob blob-blue"></div>
          <div className="abstract-waves">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements-container">
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="float-item balloon">🎈</motion.div>
          <motion.div animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }} className="float-item star">⭐</motion.div>
          <motion.div animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="float-item cloud">☁️</motion.div>
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="float-item sparkle">✨</motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="float-item toy">🧸</motion.div>
        </div>

        <div className="container">
          <div className="hero-main-grid">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-left"
            >
              <div className="premium-badge-v2">
                <Sparkles size={14} /> <span>Get in Touch</span>
              </div>
              <h1 className="hero-title-v2">
                Let's Start a <br />
                <span className="text-gradient-v2">Conversation</span>
              </h1>
              <p className="hero-desc-v2">
                Have questions about our vibrant learning environment? Our friendly team is here to guide you through every step of your child's journey.
              </p>
              <div className="hero-actions">
                <a href="#contact-form" className="btn btn-premium-v2">
                  <span>Send Message</span>
                  <Send size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="hero-right"
            >
              <div className="hero-image-wrapper-v2 animate-float">
                <img src="/src/assets/gallery/contact-hero.png" alt="Happy Children" className="hero-main-img" />
                <div className="img-glow"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom divider overlap */}
        <div className="bottom-wave-overlap">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="var(--bg-soft)"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-info-panel"
            >
              <div className="info-header-premium">
                <span className="info-subtitle">Get in Touch</span>
                <h2 className="info-title">Contact <span className="text-highlight">Details</span></h2>
                <p className="info-desc">We're always here to listen and help! Choose your preferred way to reach us.</p>
              </div>
              
              <div className="info-cards-stack">
                <motion.div whileHover={{ y: -10 }} className="info-card-v3 pink">
                  <div className="card-decoration"></div>
                  <div className="icon-circle">
                    <MapPin size={26} />
                  </div>
                  <div className="card-content">
                    <h4>Visit Campus</h4>
                    <p>Near Akhada gym, Karam Chowk, Vidyanagar, Ranchi</p>
                    <a href="https://maps.google.com" target="_blank" className="action-link">Get Directions <ExternalLink size={14} /></a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -10 }} className="info-card-v3 blue">
                  <div className="card-decoration"></div>
                  <div className="icon-circle">
                    <Phone size={26} />
                  </div>
                  <div className="card-content">
                    <h4>Call Support</h4>
                    <p>Available Mon-Sat, 8am - 4pm</p>
                    <a href="tel:+916207383145" className="action-link">+91 6207383145</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -10 }} className="info-card-v3 yellow">
                  <div className="card-decoration"></div>
                  <div className="icon-circle">
                    <Mail size={26} />
                  </div>
                  <div className="card-content">
                    <h4>Email Inquiries</h4>
                    <p>Expect a reply within 24 hours</p>
                    <a href="mailto:kumarrishikant660@gmail.com" className="action-link">Send Email</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -10 }} className="info-card-v3 purple">
                  <div className="card-decoration"></div>
                  <div className="icon-circle">
                    <Clock size={26} />
                  </div>
                  <div className="card-content">
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 8:00 AM - 4:00 PM</p>
                    <span className="status-badge">Open Now</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-form-panel"
            >
              <div className="form-container-premium glass">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="success-state"
                    >
                      <div className="success-icon">
                        <CheckCircle size={80} color="var(--p-green)" />
                      </div>
                      <h3>Message Sent!</h3>
                      <p>Thank you for reaching out. We will get back to you within 24 hours.</p>
                      <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="form-header">
                        <h3>Send a Message</h3>
                        <p>Fill out the form below and we'll be in touch soon.</p>
                      </div>

                      {errorMsg && <div className="error-alert">{errorMsg}</div>}

                      <form ref={form} onSubmit={handleSubmit} className="premium-form">
                        <div className="input-group">
                          <label>Your Name</label>
                          <div className="input-field">
                            <User size={18} />
                            <input type="text" name="name" placeholder="John Doe" required />
                          </div>
                        </div>

                        <div className="input-row">
                          <div className="input-group">
                            <label>Email Address</label>
                            <div className="input-field">
                              <Mail size={18} />
                              <input type="email" name="email" placeholder="john@example.com" required />
                            </div>
                          </div>
                          <div className="input-group">
                            <label>Phone Number</label>
                            <div className="input-field">
                              <Smartphone size={18} />
                              <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
                            </div>
                          </div>
                        </div>

                        <div className="input-group">
                          <label>Message</label>
                          <div className="input-field textarea-field">
                            <MessageSquare size={18} className="textarea-icon" />
                            <textarea name="message" placeholder="How can we help you?" required rows="4"></textarea>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-pink btn-full" disabled={isLoading}>
                          {isLoading ? <Loader2 size={24} className="animate-spin" /> : <>Send Message <Send size={18} /></>}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visit Our <span className="text-gradient">Campus</span></h2>
            <p className="section-subtitle">We are located in the heart of Ranchi. Come visit us for a school tour!</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="map-container-wrapper glass"
          >
            <iframe
              title="Vidya Academy Map"
              src="https://maps.google.com/maps?q=Vidyaa%20academy%20kids%20school%20Near%20Akhada%20gym%20karam%20chowk%20Vidyanagar%20Ranchi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '25px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
