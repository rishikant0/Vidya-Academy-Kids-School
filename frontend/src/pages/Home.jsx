import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, Puzzle } from 'lucide-react';
import Curriculum from '../components/sections/Curriculum';
import Activities from '../components/sections/Activities';
import Testimonials from '../components/sections/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h1>Welcome to Vidya Academy Kids School</h1>
            <p className="hero-subtext">A joyful place for learning, growth, and creativity. We're an award-winning preschool focusing on bright futures.</p>
            <div className="hero-buttons">
              <Link to="/admission" className="btn btn-primary">Admission Open</Link>
              <Link to="/admission" className="btn btn-accent">Apply Now</Link>
            </div>
          </div>
          <div className="hero-image animate-float" data-aos="fade-left" data-aos-delay="200">
            <img src="/home_attractive.png" alt="Happy kids learning" />
          </div>
        </div>
        <div className="hero-curve">
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.4,36.57,208.77,50.75,321.39,56.44Z" fill="var(--secondary-bg)"></path>
           </svg>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Why Choose Vidya Academy?</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">We give your child the perfect start for a bright future</p>
          
          <div className="highlights-grid">
            <div className="highlight-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="highlight-icon icon-pink">
                <Smile size={48} />
              </div>
              <h3>Friendly Environment</h3>
              <p>We provide a safe, caring, and nurturing atmosphere where every child feels loved and supported in their daily learning journey.</p>
            </div>
            
            <div className="highlight-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="highlight-icon icon-yellow">
                <Zap size={48} />
              </div>
              <h3>Fast Learning</h3>
              <p>Our unique mix of structured teaching and natural curiosity accelerates basic reading, writing, and speaking skills early on.</p>
            </div>
            
            <div className="highlight-card" data-aos="zoom-in" data-aos-delay="600">
              <div className="highlight-icon icon-green">
                <Puzzle size={48} />
              </div>
              <h3>Fun Activities</h3>
              <p>Engaging play-based activities that support physical, emotional, and creative growth while keeping children excited.</p>
            </div>
          </div>
        </div>
      </section>

      <Curriculum />
      <Activities />
      <Testimonials />
    </div>
  );
};

export default Home;
