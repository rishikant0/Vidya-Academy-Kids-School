import React from "react";
import { motion } from "framer-motion";

const TrustSection = ({ whyTrustUs }) => {
  return (
    <section className="trust-ultra">

      {/* Background Shapes */}
      <div className="bg-shape pink"></div>
      <div className="bg-shape blue"></div>
      <div className="bg-shape yellow"></div>

      <div className="container">
        <div className="section-header">
          <span className="badge">✨ Excellence & Care</span>
          <h2 className="title">
            Why Parents Trust Us <span>💖</span>
          </h2>
          <p className="subtitle">
            Combining love, safety, and smart learning for your child’s bright future.
          </p>
        </div>

        <div className="grid">
          {whyTrustUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className={`card card-${idx}`}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TrustSection);