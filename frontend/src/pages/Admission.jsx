import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, GraduationCap, User, Users, Mail, Phone, BookOpen, Sparkles, Star, ShieldCheck, Heart, Clock } from 'lucide-react';
import './Admission.css';

const Admission = () => {
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
      student_name: formData.get("student_name"),
      parent_name: formData.get("parent_name"),
      parent_email: formData.get("parent_email"),
      phone: formData.get("phone"),
      class_selection: formData.get("class"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/admission", {
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
    <div className="admission-page-v2">
      {/* Premium 2-Column Hero Section */}
      <section className="admission-hero-premium-v2">
        <div className="hero-bg-canvas">
          <div className="mesh-layer"></div>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        {/* Floating Playful Emojis */}
        <div className="emojis-layer">
          <motion.div animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="floating-emoji balloon">🎈</motion.div>
          <motion.div animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }} transition={{ duration: 5, repeat: Infinity }} className="floating-emoji star">⭐</motion.div>
          <motion.div animate={{ rotate: [0, -10, 0], y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="floating-emoji toy">🧸</motion.div>
          <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="floating-emoji cloud">☁️</motion.div>
        </div>

        <div className="container">
          <div className="hero-2-col-grid">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text-content"
            >
              <div className="hero-badge-v2">
                <Heart size={16} fill="var(--p-pink-alt)" />
                <span>Join Our Family</span>
              </div>
              <h1 className="hero-title-v3">
                The Best Start For <br />
                <span className="text-gradient-v3">Your Child's Future</span>
              </h1>
              <p className="hero-subtext-v3">
                Unlock your child's potential in a vibrant, supportive, and joyful learning environment. We nurture every dream with love and care.
              </p>
              <div className="hero-cta-group">
                <a href="#admission-form" className="btn btn-premium-v2">
                  Apply Now <Send size={18} />
                </a>
                <a href="/contact" className="btn btn-outline-v2">
                  Visit Campus <Sparkles size={18} />
                </a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="hero-image-side"
            >
              <div className="image-frame-v3 glass">
                <img src="/src/assets/admission-hero.png" alt="Happy Learning Children" className="hero-kids-img" />
                <div className="image-glow-v3"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero-wave-v2">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="var(--bg-soft)"/>
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="admission-form-section-v3 section" id="admission-form">
        <div className="container">
          <div className="form-layout-centered">
            
            {/* Background Decorative Blobs */}
            <div className="form-premium-bg">
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-3"></div>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="success-card-premium glass"
                >
                  <div className="success-icon-container">
                    <CheckCircle size={100} color="var(--p-green)" />
                  </div>
                  <h2>Welcome to the Family!</h2>
                  <p>Your application has been received with love. Our team will contact you within 24 hours to guide you through the next steps.</p>
                  <button className="btn btn-premium-v2" onClick={() => setSubmitted(false)}>Send Another</button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6 }}
                  className="admission-card-premium glass"
                >
                  <div className="form-decoration-line"></div>
                  
                  <div className="form-header-premium">
                    <div className="icon-badge-premium pink-mesh">
                      <GraduationCap size={36} />
                    </div>
                    <div className="header-content-v3">
                      <span className="form-step-badge">Application Form</span>
                      <h2>Admission <span className="text-secondary">Portal</span></h2>
                      <p>Tell us more about your child to begin their joyful journey.</p>
                    </div>
                  </div>

                  {errorMsg && <div className="error-banner-v3">{errorMsg}</div>}

                  <form ref={form} onSubmit={handleSubmit} className="premium-form-v3">
                    <div className="form-grid-v3">
                      <div className="input-group-v3">
                        <label>Student's Full Name</label>
                        <div className="input-field-v3">
                          <User size={20} className="field-icon" />
                          <input type="text" name="student_name" placeholder="E.g. Aarav Kumar" required />
                        </div>
                      </div>

                      <div className="input-group-v3">
                        <label>Parent's Full Name</label>
                        <div className="input-field-v3">
                          <Users size={20} className="field-icon" />
                          <input type="text" name="parent_name" placeholder="E.g. Rajesh Kumar" required />
                        </div>
                      </div>

                      <div className="input-group-v3">
                        <label>Email Address</label>
                        <div className="input-field-v3">
                          <Mail size={20} className="field-icon" />
                          <input type="email" name="parent_email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="input-group-v3">
                        <label>Phone Number</label>
                        <div className="input-field-v3">
                          <Phone size={20} className="field-icon" />
                          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
                        </div>
                      </div>

                      <div className="input-group-v3 full-width">
                        <label>Applying For Class</label>
                        <div className="input-field-v3">
                          <BookOpen size={20} className="field-icon" />
                          <select name="class" required defaultValue="">
                            <option value="" disabled>Choose Target Class</option>
                            <option value="prenursery">Pre-Nursery</option>
                            <option value="nursery">Nursery</option>
                            <option value="lkg">LKG</option>
                            <option value="ukg">UKG</option>
                            <option value="class1">Class 1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-submit-wrapper">
                      <button type="submit" className="btn btn-premium-v3" disabled={isLoading}>
                        {isLoading ? <Loader2 size={24} className="animate-spin" /> : <>Submit Application <Send size={20} /></>}
                      </button>
                    </div>
                  </form>

                  <div className="form-stats-v3">
                    <div className="mini-pill"><Star size={16} fill="#FFD700" color="#FFD700" /> <span>500+ Happy Kids</span></div>
                    <div className="mini-pill"><ShieldCheck size={16} color="var(--p-blue-alt)" /> <span>Fully Secured</span></div>
                    <div className="mini-pill"><Clock size={16} color="var(--p-pink-alt)" /> <span>Quick Response</span></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
