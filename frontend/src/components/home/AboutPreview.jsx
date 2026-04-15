import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Star, Zap, ArrowRight, Award, Cloud } from "lucide-react";

const AboutPreview = ({ p11, p12 }) => {
  return (
    <section className="v8-about">
      {/* Playful Background Elements */}
      <div className="about-decor decor-dots"></div>
      
      {/* Floating Icons */}
      <Star className="floating-decor decor-star" style={{ top: '10%', right: '5%', width: '40px', height: '40px' }} />
      <Cloud className="floating-decor decor-cloud" style={{ bottom: '15%', left: '2%', width: '80px', height: '80px' }} />
      <div className="floating-decor decor-balloon" style={{ top: '20%', left: '8%', fontSize: '40px' }}>🎈</div>
      
      <div className="container">
        <div className="v8-about-grid">
          
          {/* 📸 VISUAL SIDE: Layered Images & Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="v8-about-visual"
          >
            <div className="v8-image-wrapper">
              <div className="v8-img main">
                <img src={p11} alt="Playful learning" />
              </div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="v8-img second"
              >
                <img src={p12} alt="Joyful classroom" />
              </motion.div>
              
              {/* Floating Trust Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="trust-badge-float"
              >
                <div className="badge-icon">
                  <Award size={28} />
                </div>
                <div className="badge-text">
                  <h4>10+ Years</h4>
                  <span>of Excellence</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ✍️ TEXT SIDE: Premium Typography & Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="v8-about-text"
          >
            <div className="v8-badge-alt">
              <Star size={18} fill="currentColor" />
              <span>Nurturing Ranchi's Future Leaders</span>
            </div>
            
            <h2 className="v8-title">
              Where <span className="title-accent-1">Curiosity</span> Meets 
              <br />
              <span className="title-accent-2">Creative</span> Discovery
            </h2>
            
            <p className="v8-desc">
              Vidya Academy is more than just a school; it's a second home where every child is empowered 
               to explore, imagine, and grow. Our premium play-based curriculum is designed to 
               foster social, emotional, and cognitive brilliance in a safe, loving environment.
            </p>

            <div className="v8-info-grid">
              <div className="v8-info-card">
                <div className="icon-wrap pink">
                  <Heart size={24} />
                </div>
                <div className="card-text">
                  <h5>Quality Care</h5>
                  <p>Individual attention to every child</p>
                </div>
              </div>
              
              <div className="v8-info-card">
                <div className="icon-wrap blue">
                  <ShieldCheck size={24} />
                </div>
                <div className="card-text">
                  <h5>Safe & Secure</h5>
                  <p>CCTV monitored & gated campus</p>
                </div>
              </div>
              
              <div className="v8-info-card">
                <div className="icon-wrap yellow">
                  <Zap size={24} />
                </div>
                <div className="card-text">
                  <h5>Interactive</h5>
                  <p>Smart classes & activity zones</p>
                </div>
              </div>

              <div className="v8-info-card">
                <div className="icon-wrap purple">
                  <Award size={24} />
                </div>
                <div className="card-text">
                  <h5>Certified</h5>
                  <p>Recognized for early childhood care</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn btn-primary btn-glow">
              Our Journey <ArrowRight size={20} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutPreview);