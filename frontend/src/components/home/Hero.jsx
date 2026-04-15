import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-premium-v6">

      {/* BACKGROUND */}
      <div className="hero-v6-bg-image">
        <img src="/hero_bg.png" alt="School environment" />
        <div className="hero-v6-overlay"></div>
      </div>

      <div className="container hero-v6-container">
        <div className="hero-v6-flex-wrapper">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-v6-text-content"
          >
            <div className="v6-badge">
              <Sparkles size={16} /> Ranchi's Best Preschool
            </div>

            <h1 className="v6-title">
              Welcome to <br />
              <span className="text-gradient">Vidya Academy</span>
            </h1>

            <h2 className="v6-subtitle-alt">
              Where Little Dreams Take Flight!
            </h2>

            <p className="v6-desc">
              Experience a world of joy, creativity, and discovery.
            </p>

            <div className="v6-actions">
              <Link to="/admission" className="btn btn-primary">
                Apply Now <ArrowRight size={20} />
              </Link>

              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ❌ REMOVE THIS (IMPORTANT) */}
      {/* <div className="v6-wave">...</div> */}

    </section>
  );
};

export default React.memo(Hero);