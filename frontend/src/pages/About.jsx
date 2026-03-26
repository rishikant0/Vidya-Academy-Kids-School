import React from 'react';
import { Shield, Heart, Star, CheckCircle, Award, Users, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content" data-aos="fade-up">
          <span className="section-badge" style={{background: 'rgba(255,255,255,0.15)', color: 'var(--sunny-yellow)', border: '1px solid rgba(255,255,255,0.2)'}}>About Us</span>
          <h1>About Vidya Academy Kids School</h1>
          <p>Nurturing young minds in a safe, caring, and vibrant environment where learning meets fun.</p>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container story-grid">
          <div className="story-image" data-aos="fade-right">
            <img src="/about_kids.png" alt="Kids learning" className="styled-img" />
            <div className="img-accent"></div>
          </div>
          <div className="story-content" data-aos="fade-left">
            <span className="section-badge" style={{background: 'var(--bg-pink-soft)', color: 'var(--hot-pink)'}}>Our Story</span>
            <h2>Our Story & Vision</h2>
            <p>Founded with the belief that early childhood education should be full of joy, Vidya Academy Kids School is dedicated to providing an atmosphere where children can grow intellectually, emotionally, and physically.</p>
            <ul className="story-list">
              <li><CheckCircle size={20} color="var(--fresh-green)" /> Child-centric learning approach</li>
              <li><CheckCircle size={20} color="var(--bright-yellow)" /> Highly trained & loving staff</li>
              <li><CheckCircle size={20} color="var(--deep-blue)" /> Modern facility with advanced tools</li>
              <li><CheckCircle size={20} color="var(--hot-pink)" /> Focus on personality development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section" style={{background: 'var(--bg-blue-soft)'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge" style={{background: 'var(--bg-soft)', color: 'var(--bright-yellow)'}}>Our Values</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">What makes us the best choice for your child</p>
          </div>
          <div className="values-grid">
            <div className="value-card" data-aos="fade-up">
              <div className="value-icon" style={{background: 'var(--bg-pink-soft)', color: 'var(--hot-pink)'}}><Heart size={32} /></div>
              <h3>Focus on Development</h3>
              <p>Every activity nurtures cognitive, social, and emotional growth in young minds.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="150">
              <div className="value-icon" style={{background: 'var(--bg-soft)', color: 'var(--bright-yellow)'}}><Star size={32} /></div>
              <h3>Activity-Based Learning</h3>
              <p>Blending education with play, guaranteeing children stay curious and excited.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon" style={{background: 'var(--bg-green-soft)', color: 'var(--fresh-green)'}}><Shield size={32} /></div>
              <h3>Safe Environment</h3>
              <p>Your child's safety and well-being is our top priority, giving parents peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="principal-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge" style={{background: 'var(--bg-blue-soft)', color: 'var(--deep-blue)'}}>Leadership</span>
            <h2 className="section-title">Principal's Message</h2>
          </div>
          <div className="principal-card" data-aos="zoom-in">
            <div className="principal-photo">
              <img src="/principal.png" alt="Principal Soni Singh" />
            </div>
            <div className="principal-content">
              <div className="quote-mark">"</div>
              <p className="principal-quote">
                With over 12 years of experience in education, I am passionately dedicated to shaping young minds with care and excellence. We believe that every child has exceptional potential, and our goal is to ignite their love for learning from their very first day.
              </p>
              <div className="principal-signature">
                <h4 className="principal-name">Soni Singh</h4>
                <span className="principal-title-text">Principal, Vidya Academy Kids School</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
