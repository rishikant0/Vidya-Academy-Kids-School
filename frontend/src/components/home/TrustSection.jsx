import React from "react"; // ✅ FIX
import { motion } from "framer-motion";
import { Star, Cloud } from "lucide-react";

const TrustSection = ({ whyTrustUs }) => {
  return (
    <section className="v6-trust">

      {/* Floating Decorations */}
      <Star className="floating-decor decor-star" style={{ top: '15%', left: '5%', width: '30px', height: '30px' }} />
      <Cloud className="floating-decor decor-cloud" style={{ top: '25%', right: '2%', width: '100px', height: '100px' }} />
      <div className="floating-decor decor-balloon" style={{ bottom: '10%', right: '8%', fontSize: '40px' }}>🎈</div>
      <Star className="floating-decor decor-star" style={{ bottom: '20%', left: '10%', width: '25px', height: '25px', color: '#ff6ec7' }} />

      <div className="container">
        <div className="section-header">
          <span className="section-badge">The Vidya Advantage</span>

          <h2 className="section-title">
            Why Parents <span className="text-gradient">Trust Us</span>
          </h2>

          <p className="section-subtitle">
            We provide a nurturing environment where your child can explore,
            learn, and grow with confidence and joy.
          </p>
        </div>

        <div className="v6-trust-grid">
          {whyTrustUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`v6-trust-card card-color-${idx + 1}`}
            >
              <div className="v6-card-icon">
                {item.icon}
              </div>

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