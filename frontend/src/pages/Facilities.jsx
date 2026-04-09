import React from 'react';
import { Bus, Palette, Waves, Tent, Shield, Gamepad } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const facilitiesData = [
    { title: "School Van", desc: "Reliable and safe transportation service with dedicated caretakers for student safety.", icon: <Bus size={32} />, gradient: 'linear-gradient(135deg, #FF7043, #D84315)', shadow: 'rgba(216, 67, 21, 0.3)' },
    { title: "Drawing Activity", desc: "Nurturing creativity through colors, sketches, and fun artistic expressions.", icon: <Palette size={32} />, gradient: 'linear-gradient(135deg, #F48FB1, #E91E63)', shadow: 'rgba(233, 30, 99, 0.3)' },
    { title: "Kids Pool", desc: "A safe and fun splash zone for children to enjoy joyful water activities.", icon: <Waves size={32} />, gradient: 'linear-gradient(135deg, #FFD54F, #FF9800)', shadow: 'rgba(255, 152, 0, 0.3)' },
    { title: "Outdoor Play Area", desc: "Spacious grounds with modern swings and slides for physical growth.", icon: <Tent size={32} />, gradient: 'linear-gradient(135deg, #81C784, #43A047)', shadow: 'rgba(67, 160, 71, 0.3)' },
    { title: "Indoor Play Area", desc: "Soft-cushioned zones for toddlers to safely jump, slide, and explore.", icon: <Gamepad size={32} />, gradient: 'linear-gradient(135deg, #FFB74D, #E65100)', shadow: 'rgba(230, 81, 0, 0.3)' },
    { title: "24/7 Security", desc: "Full CCTV coverage, restricted entry, and well-trained security staff.", icon: <Shield size={32} />, gradient: 'linear-gradient(135deg, #FF7043, #D84315)', shadow: 'rgba(216, 67, 21, 0.3)' },
  ];

  return (
    <div className="facilities-container">
      <section className="page-hero facilities-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content" data-aos="fade-up">
          <span className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--sunny-yellow)', border: '1px solid rgba(255,255,255,0.2)' }}>Facilities</span>
          <h1>Our World-Class Facilities</h1>
          <p>Designed specifically for the safety, growth, and happiness of little learners.</p>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="white" />
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
