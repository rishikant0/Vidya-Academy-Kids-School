import React from 'react';
import { BookOpen, TrendingUp, Presentation } from 'lucide-react';
import './Sections.css';

const Curriculum = () => {
  return (
    <section className="curriculum-section section">
      <div className="container">
        <div className="section-header text-center" style={{marginBottom: '50px'}} data-aos="fade-up">
          <h2 className="section-title">Our Curriculum</h2>
          <p className="section-subtitle">Pre Nursery to Class 1 - Building a strong foundation</p>
        </div>
        
        <div className="curriculum-content">
          <div className="curriculum-item" data-aos="fade-up">
            <div className="c-icon"><TrendingUp size={36} color="var(--primary-blue)" /></div>
            <div className="c-text">
              <h3>Fast Learning Techniques</h3>
              <p>We apply scientifically proven methods to help children grasp concepts faster while enjoying the process.</p>
            </div>
          </div>
          
          <div className="curriculum-item" data-aos="fade-up" data-aos-delay="200">
            <div className="c-icon"><Presentation size={36} color="var(--primary-pink)" /></div>
            <div className="c-text">
              <h3>Play-Based Learning</h3>
              <p>Education is seamlessly integrated with playtime, ensuring students remain engaged and excited.</p>
            </div>
          </div>
          
          <div className="curriculum-item" data-aos="fade-up" data-aos-delay="400">
            <div className="c-icon"><BookOpen size={36} color="var(--primary-green)" /></div>
            <div className="c-text">
              <h3>Core Skills Focus</h3>
              <p>Emphasizing essential reading, writing, and speaking skills to prepare them for higher classes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
