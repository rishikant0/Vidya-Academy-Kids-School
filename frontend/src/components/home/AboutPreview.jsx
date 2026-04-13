import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Star, Zap, ArrowRight } from "lucide-react";

const AboutPreview = ({ p11, p12 }) => {
  return (
    <section className="about-pro">

      {/* Background Glow */}
      <div className="about-bg pink"></div>
      <div className="about-bg blue"></div>

      <div className="container">
        <div className="about-wrapper">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="about-images"
          >
            <img src={p11} alt="" className="img-main" />
            <img src={p12} alt="" className="img-float" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="about-content"
          >
            <span className="badge">✨ Welcome to Vidya Academy</span>

            <h2>
              Nurturing Hearts, <br />
              <span>Inspiring Minds</span>
            </h2>

            <p className="desc">
              At Vidya Academy, every child is a unique star ⭐. Our playful,
              safe, and creative environment helps children grow with confidence.
            </p>
            <p>Our dedicated team of professionals ensures a safe, vibrant, and fun atmosphere where your child can thrive socially and academically through discovery and interaction.</p>

            {/* FEATURES */}
            <div className="features">
              <div><Heart /> Loving Staff</div>
              <div><ShieldCheck /> Safe Campus</div>
              <div><Star /> Top Rated</div>
              <div><Zap /> Interactive</div>
            </div>

            <Link to="/about" className="btn-main">
              Our Story <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutPreview);