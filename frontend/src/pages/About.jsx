import React from 'react';
import { Shield, Heart, Star, UserPlus, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Dynamic Header */}
      <section className="about-header section pattern-bg">
        <div className="container relative-container">
          <div className="floating-shape shape-pink"></div>
          <div className="floating-shape shape-yellow"></div>
          <h1 className="section-title" data-aos="fade-down">About Vidya Academy Kids School</h1>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Nurturing young minds in a safe, caring, and vibrant environment where learning meets fun.
          </p>
        </div>
      </section>

      {/* Split Story Section */}
      <section className="story-section section">
        <div className="container story-grid">
          <div className="story-image" data-aos="fade-right">
            <img src="/gallery_1.png" alt="Kids learning" className="styled-img" />
            <div className="img-backdrop"></div>
          </div>
          <div className="story-content" data-aos="fade-left">
            <h2 className="content-title">Our Story & Vision</h2>
            <p>Founded with the belief that early childhood education should be full of joy, Vidya Academy Kids School is dedicated to providing an atmosphere where children can grow intellectually, emotionally, and physically.</p>
            <ul className="story-list">
              <li><CheckCircle size={22} color="var(--primary-green)" /> Child-centric learning approach</li>
              <li><CheckCircle size={22} color="var(--primary-yellow)" /> Highly trained & loving staff</li>
              <li><CheckCircle size={22} color="var(--primary-blue)" /> Modern facility with advanced tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
         <div className="container">
           <div className="section-header text-center" data-aos="fade-up">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">What makes us the best choice for your child</p>
           </div>
           <div className="features-grid">
             <div className="feature-card" data-aos="fade-up">
               <div className="feature-icon"><Heart size={40} color="var(--primary-pink)" /></div>
               <h3>Focus on Development</h3>
               <p>Every activity is designed to nurture cognitive, social, and emotional growth in young minds.</p>
             </div>
             <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
               <div className="feature-icon"><Star size={40} color="var(--primary-yellow)" /></div>
               <h3>Activity-Based Learning</h3>
               <p>We blend education with play, guaranteeing children stay curious and excited to discover.</p>
             </div>
             <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
               <div className="feature-icon"><Shield size={40} color="var(--primary-green)" /></div>
               <h3>Safe Environment</h3>
               <p>Our top priority is your child's safety and well-being, providing peace of mind for parents.</p>
             </div>
           </div>
         </div>
      </section>

      {/* Principal Section */}
      <section className="principal-section section">
        <div className="container">
          <div className="principal-card" data-aos="zoom-in">
            <div className="principal-photo">
            </div>
            <div className="principal-content">
              <h2>Principal's Message</h2>
              <div className="quote-mark">"</div>
              <p className="principal-quote">
                With over a decade of experience, our principal is dedicated to providing quality education and shaping young minds with care and excellence. We believe that every child has exceptional potential, and our goal is to ignite their love for learning from their very first day.
              </p>
              <div className="principal-signature" data-aos="fade-up" data-aos-delay="200">
                 <h4 className="principal-name">Soni Singh</h4>
                 <span className="principal-title">Principal, Vidya Academy Kids School</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
