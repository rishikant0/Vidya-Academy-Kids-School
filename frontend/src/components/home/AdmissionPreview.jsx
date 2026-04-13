import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smile
} from "lucide-react";

import admissionImg from "../../assets/gallery/kids_slide.jpg";

const AdmissionPreview = () => {

  // ✅ AUTO SESSION YEAR (APRIL BASED - INDIA)
  const getSessionYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 = Jan

    const startYear = month >= 3 ? year : year - 1; // April start
    const nextYear = (startYear + 1).toString().slice(-2);

    return `${startYear}-${nextYear}`;
  };

  return (
    <section className="admission-v3">

      {/* 🌈 BACKGROUND DECOR */}
      <div className="v3-canvas">
        <div className="v3-blob pink"></div>
        <div className="v3-blob purple"></div>
        <div className="v3-blob blue"></div>
        <div className="v3-blob yellow"></div>
        <div className="v3-blob indigo"></div>
        
        {/* Abstract Floating Shapes (Geometric) */}
        <div className="v3-shape s1"></div>
        <div className="v3-shape s2"></div>
        <div className="v3-shape s3"></div>
        <div className="v3-shape s4"></div>

        {/* Floating Elements (Emojis) */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="v3-float f1"
        >
          🎈
        </motion.div>

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="v3-float f2"
        >
          🧸
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="v3-float f3"
        >
          ⭐
        </motion.div>
      </div>

      <div className="container">
        <div className="v3-grid">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="v3-content"
          >

            {/* ✅ AUTO YEAR HERE */}
            <div className="v3-badge-vibrant">
              <span className="pulse-dot"></span>
              ✨ Admissions Open {getSessionYear()}
            </div>

            <h2 className="v3-title-ultra">
              Start Your Child's <br />
              <span className="text-glow-highlight">
                Magical Journey
              </span>
            </h2>

            <p className="v3-desc">
              Join a community where learning is an adventure! We create a nurturing
              space for children to explore their world through play, creativity,
              and expert guidance.
            </p>

            <div className="v3-points">
              <div className="v3-chip">
                <Heart size={18} fill="white" /> Holistic Growth
              </div>
              <div className="v3-chip">
                <ShieldCheck size={18} fill="white" /> Expert Mentors
              </div>
              <div className="v3-chip">
                <Smile size={18} fill="white" /> Fun Learning
              </div>
            </div>

            <div className="v3-actions">
              <Link to="/admission" className="btn-v3-primary">
                Register Now <ArrowRight size={20} />
              </Link>

              <Link to="/contact" className="btn-v3-glass">
                Visit Campus
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="v3-image-area"
          >
            <div className="v3-image-frame">
              <img src={admissionImg} alt="Happy Kids" className="v3-img" />
              <div className="v3-img-overlay"></div>

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="v3-mini-card"
              >
                <div className="icon-circle">
                  <Sparkles size={20} />
                </div>
                <span>Play & Learn</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(AdmissionPreview);