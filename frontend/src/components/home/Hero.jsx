import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const text = "Welcome to Vidya Academy";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-v6-text-content"
          >

            {/* BADGE */}
            <div className="v6-badge">
              <Sparkles size={16} /> Ranchi's Best Preschool
            </div>

            {/* 🔥 TITLE (WORD ANIMATION) */}
            <h1 className="v6-title gradient-text gradient-text-glow">
              {text.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  style={{ marginRight: "10px", display: "inline-block" }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* SUBTITLE */}
            <motion.h2
              className="v6-subtitle-alt gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Where Little Dreams Take Flight!
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              className="v6-desc gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Experience a world of joy, creativity, and discovery.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="v6-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Link to="/admission" className="btn btn-primary">
                Apply Now <ArrowRight size={20} />
              </Link>

              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default React.memo(Hero);