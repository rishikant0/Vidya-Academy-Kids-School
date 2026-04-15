import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Palette, Waves, Tent, Shield, Gamepad, Star, Cloud, Heart, Ghost } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const facilitiesData = [
    { title: "Smart Van", desc: "Safe transportation with GPS and caring staff.", icon: <Bus size={35} />, color: '#3b82f6', bg: '#eff6ff' },
    { title: "Art World", desc: "A colorful space for young artists to shine.", icon: <Palette size={35} />, color: '#ec4899', bg: '#fdf2f8' },
    { title: "Splash Zone", desc: "Safe water fun in our private kids pool.", icon: <Waves size={35} />, color: '#06b6d4', bg: '#ecfeff' },
    { title: "Jungle Gym", desc: "Premium swings and slides for active play.", icon: <Tent size={35} />, color: '#10b981', bg: '#f0fdf4' },
    { title: "Toy Kingdom", desc: "Soft indoor play area with safe boundaries.", icon: <Gamepad size={35} />, color: '#f59e0b', bg: '#fffbeb' },
    { title: "Safe Haven", desc: "24/7 CCTV and secure digital classroom access.", icon: <Shield size={35} />, color: '#8b5cf6', bg: '#f5f3ff' },
  ];

  return (
    <div className="facilities-v8 vibrant-theme">
      {/* 🚀 BRIGHT VIBRANT HERO */}
      <section className="fac-hero">
        <div className="fac-hero-shapes">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="fac-shape star"><Star size={60} fill="#fcd34d" color="#fcd34d" /></motion.div>
          <motion.div animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="fac-shape balloon"><div className="balloon-wrap">🎈</div></motion.div>
          <motion.div animate={{ y: [0, 40, 0], x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="fac-shape heart"><Heart size={50} fill="#fda4af" color="#fda4af" /></motion.div>
          <motion.div animate={{ x: [0, 80, 0] }} transition={{ duration: 10, repeat: Infinity }} className="fac-shape cloud"><Cloud size={100} fill="#fff" color="#e0f2fe" opacity={0.8} /></motion.div>
          <motion.div animate={{ y: [0, -50, 0], rotate: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="fac-shape star-mini"><Star size={25} fill="#fbbf24" color="#fbbf24" /></motion.div>
        </div>

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fac-hero-content"
          >
            <span className="fac-badge">Welcome to Playland</span>
            <h1 className="shanti-heading">Our Magic Facilities</h1>
            <p className="fac-desc">Where every corner is a new adventure waiting to happen!</p>
          </motion.div>
        </div>
        
        <div className="fac-wave">
          <svg viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,181.3C672,203,768,213,864,197.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>

      {/* 🎡 FACILITIES GRID */}
      <section className="fac-grid-wrap">
        <div className="container">
          <div className="fac-grid">
            {facilitiesData.map((fac, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: fac.color,
                  color: "#ffffff"
                }}
                className="fac-card"
                style={{ "--hover-color": fac.color, "--bg-soft": fac.bg }}
              >
                <div className="fac-icon-circle" style={{ backgroundColor: fac.bg, color: fac.color }}>
                  {fac.icon}
                </div>
                <h3>{fac.title}</h3>
                <p>{fac.desc}</p>
                
                <div className="fac-dots">
                  <span></span><span></span><span></span>
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
