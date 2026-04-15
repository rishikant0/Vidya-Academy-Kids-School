import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Star, CheckCircle, Award, Users, BookOpen, Quote, Cloud, Sun, Palette } from 'lucide-react';
import './About.css';

// Import assets
import principalImg from '../assets/principal.jpeg';
import aboutImg from '../assets/gallery/p14.jpeg';
import storyImg from '../assets/gallery/p11.jpeg';

const About = () => {
  return (
    <div className="about-v8 vibrant-theme">
      {/* ☀️ BRIGHT HERO */}
      <section className="about-hero">
        <div className="about-hero-decor">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="decor sun"><Sun size={120} fill="#fcd34d" color="#fcd34d" /></motion.div>
          <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 8, repeat: Infinity }} className="decor cloud-1"><Cloud size={80} fill="#fff" color="#e0f2fe" opacity={0.6} /></motion.div>
          <motion.div animate={{ y: [0, -40, 0] }} transition={{ duration: 5, repeat: Infinity }} className="decor balloon"><div style={{ fontSize: '3rem' }}>🎈</div></motion.div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity }} className="decor star-vibrant"><Star size={40} fill="#fb7185" color="#fb7185" opacity={0.4} /></motion.div>
        </div>

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="about-hero-text"
          >
            <span className="fac-badge">Our Wonderful Story</span>
            <h1 className="shanti-heading">Nurturing Hearts, <br /><span className="text-pink">Inspiring Minds</span></h1>
            <p className="fac-desc">A vibrant world where every child’s dream takes its first colorful flight.</p>
          </motion.div>
        </div>

        <div className="about-wave">
          <svg viewBox="0 0 1440 160"><path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,112C672,128,768,160,864,154.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>

      {/* 🧩 OUR MISSION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mission-visual"
            >
              <div className="main-frame">
                <img src={storyImg} alt="Kids learning" />
                <div className="floating-badge-v8 bottom">
                  <Heart fill="#ff4d6d" color="#ff4d6d" />
                  <span>Love & Care</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mission-content"
            >
              <span className="shanti-label">Since 16+ Years</span>
              <h2 className="shanti-heading">Our Mission & Goals</h2>
              <p className="fac-desc small">We believe that a school should be a home away from home — a place filled with laughter, discovery, and constant encouragement.</p>
              
              <div className="goal-badges">
                {[
                  { text: 'Creative Learning', color: '#ff6ec7', icon: <Palette size={20} /> },
                  { text: 'Social Growth', color: '#6ea8ff', icon: <Users size={20} /> },
                  { text: 'Safe & Secure', color: '#4ade80', icon: <Shield size={20} /> },
                  { text: 'Expert Staff', color: '#c084fc', icon: <Star size={20} /> }
                ].map((goal, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="goal-chip" 
                    style={{ '--goal-color': goal.color }}
                  >
                    {goal.icon} {goal.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 👩‍🏫 PRINCIPAL'S MESSAGE */}
      <section className="principal-v8">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="principal-card-v8"
          >
            <div className="p-card-left">
              <div className="p-img-box">
                <img src={principalImg} alt="Principal Soni Singh" />
                <div className="p-exp-pills">16+ Years Experience</div>
              </div>
            </div>
            
            <div className="p-card-right">
              <Quote size={80} className="p-quote-icon" />
              <h3>A Message from our Principal</h3>
              <p>"I strongly believe that every child is unique and special. My goal is to create a happy, safe, and caring environment where every child feels loved, confident, and excited to learn."</p>
              
              <div className="p-signature">
                <div className="sig-line"></div>
                <h4>Soni Singh</h4>
                <span>Principal, Vidya Academy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
