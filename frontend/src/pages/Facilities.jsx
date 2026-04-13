import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Palette, Waves, Tent, Shield, Gamepad } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const facilitiesData = [
    { title: "Safe Transportation", desc: "Reliable school van service with dedicated caretakers for complete student safety.", icon: <Bus size={32} />, color: 'blue' },
    { title: "Creative Art Studio", desc: "Nurturing creativity through colors, sketches, and fun artistic expressions every day.", icon: <Palette size={32} />, color: 'pink' },
    { title: "Splash Kids Pool", desc: "A safe and fun splash zone for children to enjoy joyful water activities under supervision.", icon: <Waves size={32} />, color: 'cyan' },
    { title: "Outdoor Play Area", desc: "Spacious grounds with modern swings and slides designed for physical growth and fun.", icon: <Tent size={32} />, color: 'green' },
    { title: "Indoor Play Zone", desc: "Soft-cushioned zones for toddlers to safely jump, slide, and explore their boundaries.", icon: <Gamepad size={32} />, color: 'yellow' },
    { title: "Smart Classrooms", desc: "Interactive digital tools and colorful classrooms to make learning an engaging experience.", icon: <Shield size={32} />, color: 'purple' },
  ];

  return (
    <div className="facilities-page">
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
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Our Campus</span>
            <h1>Modern Facilities</h1>
            <p>Designed specifically for the safety, growth, and happiness of our little learners.</p>
          </motion.div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="facilities-grid-section section">
        <div className="container">
          <div className="trust-premium-grid">
            {facilitiesData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="trust-premium-card"
              >
                <div className="card-inner">
                  <div className={`icon-box bg-${item.color}`}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
