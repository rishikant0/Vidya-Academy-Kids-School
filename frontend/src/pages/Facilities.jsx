import React from 'react';
import { Bus, Book, Shield, Coffee, Tv, Gamepad } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const facilitiesData = [
    { title: "Safe Transportation", desc: "GPS-enabled buses ensuring secure commutes with dedicated caretakers.", icon: <Bus size={32} />, gradient: 'linear-gradient(135deg, #FFD54F, #FF9800)', shadow: 'rgba(255, 152, 0, 0.3)' },
    { title: "Smart Classrooms", desc: "Interactive digital boards and visual learning aids in every room.", icon: <Tv size={32} />, gradient: 'linear-gradient(135deg, #4FC3F7, #1565C0)', shadow: 'rgba(21, 101, 192, 0.3)' },
    { title: "Creative Library", desc: "A colorful space filled with picture books and story-time corners.", icon: <Book size={32} />, gradient: 'linear-gradient(135deg, #F48FB1, #E91E63)', shadow: 'rgba(233, 30, 99, 0.3)' },
    { title: "Indoor Play Area", desc: "Soft-cushioned zones for toddlers to safely jump, slide, and explore.", icon: <Gamepad size={32} />, gradient: 'linear-gradient(135deg, #81C784, #43A047)', shadow: 'rgba(67, 160, 71, 0.3)' },
    { title: "Nutritious Cafeteria", desc: "Hygienic, healthy, and kid-approved meals supervised by nutritionists.", icon: <Coffee size={32} />, gradient: 'linear-gradient(135deg, #CE93D8, #8E24AA)', shadow: 'rgba(142, 36, 170, 0.3)' },
    { title: "24/7 Security", desc: "Full CCTV coverage, restricted entry, and well-trained security.", icon: <Shield size={32} />, gradient: 'linear-gradient(135deg, #FFB74D, #E65100)', shadow: 'rgba(230, 81, 0, 0.3)' },
  ];

  return (
    <div className="facilities-container">
      <section className="page-hero facilities-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content" data-aos="fade-up">
          <span className="section-badge" style={{background: 'rgba(255,255,255,0.15)', color: 'var(--sunny-yellow)', border: '1px solid rgba(255,255,255,0.2)'}}>Facilities</span>
          <h1>Our World-Class Facilities</h1>
          <p>Designed specifically for the safety, growth, and happiness of little learners.</p>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="facilities-grid-section section">
        <div className="container">
          <div className="facilities-grid">
            {facilitiesData.map((item, index) => (
              <div className="facility-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="facility-icon-wrap" style={{ background: item.gradient, boxShadow: `0 8px 20px ${item.shadow}` }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
