import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/gallery/hero_bg.jpg";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-shanti">
      <div className="container hero-shanti-grid">

        {/* IMAGE FIRST (important for mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-right"
        >
          <img src={heroImg} alt="kids" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-left"
        >
          <div className="imm-badge">
            <Sparkles size={18} /> Ranchi's Number #1 Kids School
          </div>

          <h1 className="hero-title">
            Welcome to <span>Vidya Academy</span>
          </h1>

          <h2 className="hero-heading">
            Where Little <br />
            <span>Dreams Take Flight</span>
          </h2>

          <p>
            Join Ranchi's most loved preschool where children learn, play,
            and grow in a magical environment. ✨
          </p>

          <div className="hero-btns">
            <Link to="/admission" className="btn-primary">
              Enroll Now <ArrowRight size={20} />
            </Link>

            <Link to="/contact" className="btn-secondary">
              Visit Campus
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(Hero);