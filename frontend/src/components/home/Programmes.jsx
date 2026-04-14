import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smile, Calendar, Clock, ChevronRight, Rocket } from "lucide-react";

// Import images
import img1 from "../../assets/gallery/p4.jpeg";
import img2 from "../../assets/gallery/p10.jpeg";
import img3 from "../../assets/gallery/p12.jpeg";
import img4 from "../../assets/gallery/p14.jpeg";

const Programmes = () => {
  const programmes = [
    {
      title: "Pre Nursery",
      img: img1,
      age: "2-3 Years",
      days: "5 Days/Week",
      time: "2.5 Hours",
      color: "pink",
    },
    {
      title: "Nursery",
      img: img2,
      age: "3-4 Years",
      days: "5 Days/Week",
      time: "3 Hours",
      color: "blue",
    },
    {
      title: "LKG",
      img: img3,
      age: "4-5 Years",
      days: "5 Days/Week",
      time: "3.5 Hours",
      color: "yellow",
    },
    {
      title: "UKG",
      img: img4,
      age: "5-6 Years",
      days: "5 Days/Week",
      time: "4 Hours",
      color: "purple",
    },
  ];

  return (
    <section className="programmes-premium section">
      {/* Decorative Elements */}
      <div className="decorations">
        {/* Floating Balloons */}
        <motion.div animate={{ y: [0, -30, 0], x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="balloon b1">🎈</motion.div>
        <motion.div animate={{ y: [0, 40, 0], x: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="balloon b2">🎈</motion.div>
        <motion.div animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="balloon b3">🎈</motion.div>

        {/* Floating Icons */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="emoji e1">⭐</motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} className="emoji e2">🎨</motion.div>
        <motion.div animate={{ x: [0, 15, 0], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="emoji e3">🧸</motion.div>
        <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="emoji e4">📚</motion.div>
        <motion.div animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity }} className="emoji e5">🍭</motion.div>

        {/* Glowing Blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div className="section-header">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-badge"
          >
            Learning Path
          </motion.span>
          <h2 className="section-title">Our Programmes</h2>
          <p className="section-subtitle">A vibrant journey of discovery and growth for every stage.</p>
        </div>

        <div className="programmes-grid-premium">
          {programmes.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`prog-card glass card-${prog.color}`}
            >
              <div className="prog-image-container">
                <img src={prog.img} alt={prog.title} className="prog-img" />
                <div className="prog-overlay"></div>
              </div>

              <div className="prog-info">
                <h3 className="prog-title">{prog.title}</h3>
                
                <div className="prog-specs">
                  <div className="spec">
                    <Smile size={18} />
                    <span>{prog.age}</span>
                  </div>
                  <div className="spec">
                    <Calendar size={18} />
                    <span>{prog.days}</span>
                  </div>
                  <div className="spec">
                    <Clock size={18} />
                    <span>{prog.time}</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`enroll-btn btn-${prog.color}`}
                >
                  Enroll Now <ChevronRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini CTA Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mini-cta-box glass"
        >
          <div className="cta-icon-mini">
            <Rocket color="var(--p-pink)" size={32} />
          </div>
          <div className="cta-text-mini">
            <h4>Join the Fun Today! 🚀</h4>
            <p>Ready to start your child's magical journey?</p>
          </div>
          <Link to="/admission" className="btn-mini">Get Started</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Programmes);
