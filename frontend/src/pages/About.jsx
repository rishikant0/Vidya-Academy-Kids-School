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
              <div className="principal-message-text">
                <p><strong>Respected Parents and My Dear Little Students,</strong></p>
                
                <p>I am <strong>Soni Singh</strong> and I have 16 years of teaching experience working with young children. During these years, I have learned that early childhood is the most important stage of learning and development. In a play school, children do not just learn letters and numbers; they learn how to speak, share, listen, and express their feelings. My aim as a teacher is to create a happy, safe, and caring environment where every child feels loved, confident, and excited to learn.</p>

                <p>I strongly believe that every child is unique and special. With patience, love, and proper guidance, each child can grow into a confident and independent learner. Teaching small children requires understanding their emotions, encouraging their creativity, and helping them develop good habits from an early age.</p>

                <p>I would also like to share a few simple parenting tips for parents of small children:</p>
                <ul className="parenting-tips">
                  <li>Create a daily routine for your child, including proper sleep, playtime, and learning time.</li>
                  <li>Limit screen time and encourage more physical play and creative activities like drawing, storytelling, and puzzles.</li>
                  <li>Talk and listen to your child every day—this helps build confidence and strong communication skills.</li>
                  <li>Always encourage and appreciate your child’s small achievements, as positive words make a big difference in their growth.</li>
                </ul>

                <p>Together, parents and teachers can build a strong foundation for our children’s bright future.</p>
                
                <p>Thank you.</p>
              </div>
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
