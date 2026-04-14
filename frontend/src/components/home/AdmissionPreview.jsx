import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

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
    <section className="admission-preview-v4">
      {/* Soft Background Decor */}
      <div className="v4-bg-decor">
        <div className="v4-blob-pink"></div>
        <div className="v4-blob-blue"></div>
        <div className="v4-blob-purple"></div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="v4-floating-elements">
        <motion.span 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="v4-float-item f-balloon"
        >
          🎈
        </motion.span>
        <motion.span 
          animate={{ rotate: 360 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="v4-float-item f-star"
        >
          ⭐
        </motion.span>
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="v4-card-wrapper glass"
        >
          <div className="v4-card-content">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="v4-badge"
            >
              ✨ Admissions Open {getSessionYear()}
            </motion.div>

            <h2 className="v4-title">
              Start Your Child’s <br />
              <span className="v4-gradient-text">Magical Journey</span>
            </h2>

            <p className="v4-description">
              Join Ranchi's most loved pre-school! Where curiosity meets creativity 
              in a safe, fun, and nurturing environment.
            </p>

            <div className="v4-actions">
              <Link to="/admission" className="btn btn-primary v4-btn-full">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="v4-link-visit">
                Visit Campus
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(AdmissionPreview);