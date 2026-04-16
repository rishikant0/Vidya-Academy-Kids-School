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
      {/* Gradient Background */}
      <div className="v6-bg-gradient"></div>

      {/* Animated Shapes */}
      <div className="v6-bg-shapes">
        <div className="shape s-1"></div>
        <div className="shape s-2"></div>
        <div className="shape s-3"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="v6-cta-card glass"
        >
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="v6-cta-floating heart"
          >
            <Heart size={42} fill="#ff4d6d" color="#ff4d6d" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="v6-cta-floating star"
          >
            <Star size={48} fill="#ffd60a" color="#ffd60a" />
          </motion.div>

          <div className="v6-cta-content">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="v6-cta-badge glass glow"
            >
              <div className="v6-cta-badge">
  <Sparkles size={18} />
  Admissions Open {getSessionYear()}
</div>
            </motion.div>

            {/* Title */}
            <h2 className="v6-cta-title">
              Give Your Child a <br />
              <span className="text-gradient">Bright Future 🚀</span>
            </h2>

            {/* Description */}
            <p className="v6-cta-desc">
              Limited seats available! Join Vidya Academy and unlock a world of
              creativity, learning, and joyful growth.
            </p>

            {/* Buttons */}
            <div className="v6-cta-btns">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/admission" className="btn btn-primary btn-glow">
                  Apply Now <ArrowRight size={22} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }}>
                <Link to="/contact" className="btn btn-glass">
                  Visit Campus
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(AdmissionPreview);