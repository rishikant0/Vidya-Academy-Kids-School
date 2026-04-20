import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import heroImg from "../assets/admission-hero.png";
import "./Admission.css";
import AdmissionPortal from "../components/admission/AdmissionPortal";

const Admission = () => {

  // SCROLL PARALLAX
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <div className="admission-page">

      {/* HERO */}
      <section className="admission-hero-premium">

        <div className="hero-bg-canvas"></div>

        {/* FLOATING */}
        <div className="emojis-layer">
          <motion.div className="floating-emoji balloon" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }}>🎈</motion.div>
          <motion.div className="floating-emoji star" animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 }}>⭐</motion.div>
          <motion.div className="floating-emoji toy" animate={{ y: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 6 }}>🧸</motion.div>
        </div>

        <div className="container hero-2-col-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left"
          >
            <span className="badge">💖 Join Our Family</span>

            <h1 className="hero-title">
              The Best Start For <br />
              <span className="text-gradient">Your Child's Future</span>
            </h1>

            <p className="hero-subtext">
              Unlock your child's potential in a joyful and nurturing environment.
            </p>

            <div className="hero-buttons">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium"
              >
                Apply Now <Send size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Visit Campus <Sparkles size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (PARALLAX) */}
          <motion.div
            style={{ y: yParallax }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-image-side"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="image-frame"
            >
              <img src={heroImg} alt="kids" />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="extra-section">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Where <span className="highlight-blue">Curiosity</span><br />
              Meet <span className="highlight-pink">Magic!</span>
            </h1>

            <p className="hero-subtext">
              Join Ranchi's most beloved pre-school. We don’t just teach;
              we inspire your little stars to shine brighter every day.
            </p>

            <div className="feature-grid">
              {["🚀 Smart Start","🎨 Creative Arts","😊 Happy Faces","💖 Loving Care"].map((item, i) => (
                <motion.div
                  key={i}
                  className="feature-card"
                  whileHover={{ y: -10, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="hero-buttons">
              <button className="btn-premium">
                Apply Now <Send size={18} />
              </button>

              <button className="btn-outline">
                Visit Campus <Sparkles size={18} />
              </button>
            </div>

          </motion.div>

        </div>
      </section>

      {/* FORM */}
      <section id="form" className="admission-page-wrapper">
        <AdmissionPortal />
      </section>

    </div>
  );
};

export default Admission;