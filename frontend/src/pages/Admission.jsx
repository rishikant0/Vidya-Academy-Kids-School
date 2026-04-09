import React, { useState, useRef } from 'react';
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
      // Replace with your actual backend URL in production
      const response = await fetch("http://localhost:5000/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      setErrorMsg(
        "Failed to send. Please ensure the server is running or contact us directly."
      );
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="admission-page">
      {/* ====== HERO HEADER ====== */}
      <section className="adm-hero">
        <div className="adm-hero-bg"></div>
        
        {/* Floating animated shapes */}
        <div className="adm-shape adm-shape-1"></div>
        <div className="adm-shape adm-shape-2"></div>
        <div className="adm-shape adm-shape-3"></div>
        <div className="adm-shape adm-shape-4"></div>
        <div className="adm-shape adm-shape-5"></div>
        <div className="adm-shape adm-shape-6"></div>
        <div className="adm-shape adm-shape-7"></div>
        
        <div className="adm-hero-content" data-aos="fade-down">
          <div className="adm-hero-badge">
            <Sparkles size={16} /> Now Enrolling 2025-26
          </div>
          <h1>Admissions Open <span className="adm-emoji">🎓</span></h1>
          <p>Start your child's joyful learning journey at Vidya Academy Kids School</p>
        </div>

        {/* Wave divider */}
        <div className="adm-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" preserveAspectRatio="none">
            <path d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,60 1440,100 L1440,180 L0,180 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ====== FORM SECTION ====== */}
      <section className="adm-form-section">
        <div className="adm-container">
          {/* Side decorations */}
          <div className="adm-side-decor left" data-aos="fade-right">
            <div className="decor-item decor-book">📚</div>
            <div className="decor-item decor-star">⭐</div>
            <div className="decor-item decor-pencil">✏️</div>
          </div>

          {submitted ? (
            <div className="adm-success-card" data-aos="zoom-in">
              <div className="success-confetti">🎉</div>
              <div className="success-check">
                <CheckCircle size={64} />
              </div>
              <h2>Application Submitted! 🎊</h2>
              <p>Thank you for choosing Vidya Academy. Our admission team will reach out to you shortly.</p>
              <button className="adm-btn adm-btn-secondary" onClick={() => setSubmitted(false)}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="adm-glass-card" data-aos="fade-up">
              {/* Card header */}
              <div className="adm-card-header">
                <div className="adm-card-icon">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h2>Application Form</h2>
                  <p>Fill in the details to begin</p>
                </div>
              </div>

              {errorMsg && (
                <div className="adm-error">
                  <span>⚠️</span> {errorMsg}
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="adm-form">
                <div className="adm-input-group" data-aos="fade-up" data-aos-delay="100">
                  <label>Student Name</label>
                  <div className="adm-input-wrapper">
                    <User size={18} className="adm-input-icon" />
                    <input type="text" name="student_name" placeholder="Enter child's full name" required />
                  </div>
                </div>

                <div className="adm-input-group" data-aos="fade-up" data-aos-delay="150">
                  <label>Parent / Guardian Name</label>
                  <div className="adm-input-wrapper">
                    <Users size={18} className="adm-input-icon" />
                    <input type="text" name="parent_name" placeholder="Enter parent's full name" required />
                  </div>
                </div>

                <div className="adm-input-group" data-aos="fade-up" data-aos-delay="200">
                  <label>Email Address</label>
                  <div className="adm-input-wrapper">
                    <Mail size={18} className="adm-input-icon" />
                    <input type="email" name="parent_email" placeholder="yourname@email.com" required />
                  </div>
                </div>

                <div className="adm-input-row">
                  <div className="adm-input-group" data-aos="fade-up" data-aos-delay="250">
                    <label>Phone Number</label>
                    <div className="adm-input-wrapper">
                      <Phone size={18} className="adm-input-icon" />
                      <input type="tel" name="phone" placeholder="+91 XXXXXXXXXX" required />
                    </div>
                  </div>
                  <div className="adm-input-group" data-aos="fade-up" data-aos-delay="300">
                    <label>Class Selection</label>
                    <div className="adm-input-wrapper">
                      <BookOpen size={18} className="adm-input-icon" />
                      <select name="class" required defaultValue="">
                        <option value="" disabled>Choose class</option>
                        <option value="prenursery">Pre Nursery</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="class1">Class 1</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className="adm-btn adm-btn-submit" disabled={isLoading} data-aos="fade-up" data-aos-delay="350">
                  {isLoading ? (
                    <><Loader2 className="adm-spin" size={22} /> Sending...</>
                  ) : (
                    <>Submit Application <span className="btn-emoji">🚀</span></>
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="adm-trust">
                <div className="trust-item">
                  <Star size={14} fill="var(--sunny-yellow)" color="var(--sunny-yellow)" />
                  <span>500+ Students Enrolled</span>
                </div>
                <div className="trust-item">
                  <Star size={14} fill="var(--sunny-yellow)" color="var(--sunny-yellow)" />
                  <span>12+ Years Excellence</span>
                </div>
                <div className="trust-item">
                  <Star size={14} fill="var(--sunny-yellow)" color="var(--sunny-yellow)" />
                  <span>100% Safe Campus</span>
                </div>
              </div>
            </div>
          )}

          {/* Side decorations */}
          <div className="adm-side-decor right" data-aos="fade-left">
            <div className="decor-item decor-toy">🧸</div>
            <div className="decor-item decor-abc">🔤</div>
            <div className="decor-item decor-paint">🎨</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
