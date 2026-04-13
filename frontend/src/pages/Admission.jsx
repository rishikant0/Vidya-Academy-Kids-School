import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, GraduationCap, User, Users, Mail, Phone, BookOpen, Sparkles, Star } from 'lucide-react';
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
    <div className="admission-page">
      {/* Header */}
      <section className="page-hero">
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="page-hero-content"
          >
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Enroll Now</span>
            <h1>Join Our Family</h1>
            <p>Start your child's joyful learning journey at Vidya Academy Kids School for the academic year 2024-25.</p>
          </motion.div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="admission-section section bg-soft">
        <div className="container">
          <div className="admission-form-wrapper">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="success-message glass"
                >
                  <div className="success-icon-box">
                    <CheckCircle size={80} color="var(--p-green)" />
                  </div>
                  <h2>Application Sent!</h2>
                  <p>Thank you for choosing Vidya Academy. Our admissions team will contact you shortly with the next steps.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="form-card-premium glass"
                >
                  <div className="form-header">
                    <div className="icon-box bg-blue"><GraduationCap size={28} /></div>
                    <div>
                      <h2>Admission Form</h2>
                      <p>Tell us about your child's information</p>
                    </div>
                  </div>

                  {errorMsg && <div className="error-alert">{errorMsg}</div>}

                  <form ref={form} onSubmit={handleSubmit} className="admission-form">
                    <div className="form-grid">
                      <div className="input-group">
                        <label>Student's Full Name</label>
                        <div className="input-wrapper">
                          <User size={18} />
                          <input type="text" name="student_name" placeholder="Enter child's name" required />
                        </div>
                      </div>

                      <div className="input-group">
                        <label>Parent's Full Name</label>
                        <div className="input-wrapper">
                          <Users size={18} />
                          <input type="text" name="parent_name" placeholder="Enter parent's name" required />
                        </div>
                      </div>

                      <div className="input-group">
                        <label>Email Address</label>
                        <div className="input-wrapper">
                          <Mail size={18} />
                          <input type="email" name="parent_email" placeholder="yourname@email.com" required />
                        </div>
                      </div>

                      <div className="input-group">
                        <label>Phone Number</label>
                        <div className="input-wrapper">
                          <Phone size={18} />
                          <input type="tel" name="phone" placeholder="+91 XXXXXXXXXX" required />
                        </div>
                      </div>

                      <div className="input-group full-width">
                        <label>Target Class</label>
                        <div className="input-wrapper">
                          <BookOpen size={18} />
                          <select name="class" required defaultValue="">
                            <option value="" disabled>Select Class</option>
                            <option value="prenursery">Pre Nursery</option>
                            <option value="nursery">Nursery</option>
                            <option value="lkg">LKG</option>
                            <option value="ukg">UKG</option>
                            <option value="class1">Class 1</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-full" disabled={isLoading}>
                      {isLoading ? <Loader2 size={24} className="animate-spin" /> : "Submit Application"}
                    </button>
                  </form>

                  <div className="form-footer">
                    <div className="footer-item"><Star size={16} fill="gold" /> 500+ Enrolled</div>
                    <div className="footer-item"><Star size={16} fill="gold" /> 12+ Years</div>
                    <div className="footer-item"><Star size={16} fill="gold" /> 100% Safe</div>
                  </div>
                </motion.div>
              )
            }
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
