import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart, Star } from "lucide-react";

const AdmissionPreview = () => {
  const getSessionYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const startYear = month >= 3 ? year : year - 1;
    const nextYear = (startYear + 1).toString().slice(-2);
    return `${startYear}-${nextYear}`;
  };

  return (
    <section className="v6-admission-cta">
      {/* Dynamic Background */}
      <div className="v6-bg-shapes">
        <div className="shape s-1"></div>
        <div className="shape s-2"></div>
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="v6-cta-card glass"
        >
          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="v6-cta-floating heart"
          >
            <Heart size={40} fill="var(--p-pink)" color="var(--p-pink)" />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="v6-cta-floating star"
          >
            <Star size={45} fill="var(--p-yellow)" color="var(--p-yellow)" />
          </motion.div>

          <div className="v6-cta-content">
            <div className="v6-cta-badge glass">
              <Sparkles size={18} className="star-icon" />
              <span>Admissions Open {getSessionYear()}</span>
            </div>

            <h2 className="v6-cta-title">
              Ready to Give Your Child <br />
              <span className="text-gradient">The Best Start?</span>
            </h2>

            <p className="v6-cta-desc">
              Join the Vidya Academy family today. Our limited seats fill up fast! 
              Enroll your child for a future filled with joy and success.
            </p>

            <div className="v6-cta-btns">
              <Link to="/admission" className="btn btn-primary btn-glow">
                Apply Online Now <ArrowRight size={22} />
              </Link>
              <Link to="/contact" className="btn btn-glass">
                Visit Our Campus
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(AdmissionPreview);