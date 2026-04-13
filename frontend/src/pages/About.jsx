import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Star, CheckCircle, Award, Users, BookOpen, Quote } from 'lucide-react';
import './About.css';

// Import assets
import principalImg from '../assets/principal.jpeg';
import aboutImg from '../assets/gallery/p14.jpeg';
import storyImg from '../assets/gallery/p11.jpeg';

const About = () => {
  return (
    <div className="about-page">
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
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Our Vision</span>
            <h1>Nurturing Little Dreams</h1>
            <p>At Vidya Academy, we provide a safe, caring, and vibrant environment where learning meets fun for every child.</p>
          </motion.div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-visual"
            >
              <img src={storyImg} alt="Kids learning" className="visual-main" />
              <div className="visual-float animate-float">
                <img src={aboutImg} alt="School Activity" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <span className="section-badge">How We Started</span>
              <h2 className="section-title">Our Story & Mission</h2>
              <p>Founded with the belief that early childhood education should be full of joy, Vidya Academy Kids School is dedicated to providing an atmosphere where children can grow intellectually, emotionally, and physically.</p>
              
              <div className="about-chips">
                <div className="chip"><CheckCircle size={20} /> Child-centric</div>
                <div className="chip"><Users size={20} /> Loving Staff</div>
                <div className="chip"><Award size={20} /> Modern Tools</div>
                <div className="chip"><Star size={20} /> Holistic Focus</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">What Makes Us Special</h2>
            <p className="section-subtitle">We believe in building a strong foundation for every child's future.</p>
          </div>
          
          <div className="trust-premium-grid">
            <motion.div 
              whileHover={{ y: -10 }}
              className="trust-premium-card"
            >
              <div className="card-inner">
                <div className="icon-box bg-pink"><Heart size={32} /></div>
                <h3>Focus on Growth</h3>
                <p>Every activity is designed to nurture cognitive, social, and emotional development.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="trust-premium-card"
            >
              <div className="card-inner">
                <div className="icon-box bg-blue"><BookOpen size={32} /></div>
                <h3>Play-Based Learning</h3>
                <p>We blend education with play, ensuring children stay curious and excited every day.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="trust-premium-card"
            >
              <div className="card-inner">
                <div className="icon-box bg-green"><Shield size={32} /></div>
                <h3>Secure Campus</h3>
                <p>Your child's safety is our top priority with 24/7 CCTV monitoring and secure access.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="principal-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Leadership</span>
            <h2 className="section-title">Principal's Message</h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="principal-card-modern glass"
          >
            <div className="principal-image-wrap">
              <img src={principalImg} alt="Principal Soni Singh" />
            </div>
            <div className="principal-info">
              <Quote size={60} className="quote-icon" />
              <div className="message-content">
                <h3>Respected Parents & Little Students,</h3>
                <p>I am <strong>Soni Singh</strong>, and I have 16 years of teaching experience working with young children. During these years, I have learned that early childhood is the most important stage of learning and development. In a play school, children do not just learn letters and numbers; they learn how to speak, share, listen, and express their feelings.</p>
                <p>My aim as a teacher is to create a happy, safe, and caring environment where every child feels loved, confident, and excited to learn. I strongly believe that every child is unique and special. With patience, love, and proper guidance, each child can grow into a independent learner.</p>
                
                <div className="signature-box">
                  <span className="name">Soni Singh</span>
                  <span className="title">Principal, Vidya Academy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
