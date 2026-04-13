import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Heart, Star, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-premium-wrap section">
      {/* Decorative Background Layers */}
      <div className="cta-bg-elements">
        <div className="cta-glow-blob g1"></div>
        <div className="cta-glow-blob g2"></div>
        <div className="cta-glow-blob g3"></div>
        
        {/* Floating Emojis/Icons */}
        <motion.div animate={{ y: [0, -40, 0], x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="cta-float f1">🎈</motion.div>
        <motion.div animate={{ y: [0, 30, 0], x: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="cta-float f2">🎈</motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="cta-float f3">⭐</motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="cta-float f4">🧸</motion.div>
        <motion.div animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }} className="cta-float f5">🎨</motion.div>
      </div>

      <div className="container">
        <div className="cta-glass-card">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-inner-content"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 4, repeat: Infinity }}
              className="cta-main-icon"
            >
              <Rocket size={80} className="rocket-icon" />
              <div className="cta-icon-glow"></div>
            </motion.div>

            <div className="cta-top-badge">✨ Enrollment 2024-25</div>

            <h2 className="cta-premium-title">
              Start Your Child's <br />
              <span className="cta-highlight">Journey Today</span>
            </h2>
            
            <p className="cta-premium-sub">
              Admissions are now open for the 2024-25 session! Join our family and give your child the foundation of a lifetime.
            </p>

            <div className="cta-premium-btns">
              <Link to="/admission" className="cta-btn-primary">
                Register Now <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="cta-btn-glass">
                Visit Campus <Sparkles size={18} />
              </Link>
            </div>

            {/* Extra trust badges in CTA */}
            <div className="cta-trust-chips">
              <span><Heart size={14} fill="currentColor" /> Holistic Growth</span>
              <span><Star size={14} fill="currentColor" /> Expert Mentors</span>
              <span><Sparkles size={14} fill="currentColor" /> Fun Learning</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CTASection);
