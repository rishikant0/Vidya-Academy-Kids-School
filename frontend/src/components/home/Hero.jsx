import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImg from "../../assets/gallery/hero_bg.jpg";

const Hero = () => {
  return (
    <section className="hero-premium">
      {/* Background Layer */}
      <div className="hero-bg-layer">
        <img src={heroImg} alt="Vidya Academy" className="hero-bg-image" />
        <div className="hero-dark-overlay"></div>
        <div className="hero-glow-blob pink"></div>
        <div className="hero-glow-blob blue"></div>
      </div>

      {/* Content Container */}
      <div className="container hero-content-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-badge"
        >
          <Sparkles size={16} /> Best Play School in Ranchi
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-main-title"
        >
          Welcome to <br />
          <span className="hero-gradient-text">Vidya Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="hero-main-sub"
        >
          Where Little Dreams Take Flight ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero-action-btns"
        >
          <Link to="/admission" className="btn-primary">
            Apply Now <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Hero);