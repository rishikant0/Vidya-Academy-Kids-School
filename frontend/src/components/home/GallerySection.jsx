import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Camera, Star, Heart } from 'lucide-react';

// Import images
import heroBg from '../../assets/gallery/hero_bg.jpg';
import santaKids from '../../assets/gallery/santa_kids.jpg';
import clayActivity from '../../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../../assets/gallery/kids_slide.jpg';
import p8 from '../../assets/gallery/p8.jpeg';

const GallerySection = () => {
  const galleryImages = useMemo(() => [
    { src: heroBg, title: 'Our Campus', sub: 'Vidya Academy' },
    { src: santaKids, title: 'Daily Celebration', sub: 'Creative Fun' },
    { src: clayActivity, title: 'Art & Craft', sub: 'Clay Work' },
    { src: outdoorPlay, title: 'Outdoor Play', sub: 'Active Kids' },
    { src: kidsSlide, title: 'Park Fun', sub: 'Happy Moments' },
    { src: p8, title: 'Circle Time', sub: 'Group Learning' },
  ], []);

  // Responsive Variants for Desktop Hover and Mobile Entrance
  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      translateY: -10,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0, y: 40 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    // Special variant for mobile auto-show
    mobileView: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6 }
    }
  };

  return (
    <section className="v9-gallery-section">
      <div className="container">
        <div className="v9-gallery-header">
          <span className="v9-gallery-badge">Gallery of Joy</span>
          <h2>Gallery Moments</h2>
          <p className="v9-gallery-subtitle">A glimpse into the vibrant life and happy faces within our campus.</p>
        </div>

        <div className="v9-gallery-grid">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="v9-gallery-card"
            >
              <div className="v9-gallery-img">
                <img src={img.src} alt={img.title} loading="lazy" />
                
                {/* 🏷️ OVERLAY WITH ENHANCED INTERACTION */}
                <motion.div 
                  variants={overlayVariants}
                  // On mobile, the overlay is visible when the card is in view
                  className="v9-gallery-overlay responsive-overlay"
                >
                  <div className="v9-overlay-text">
                    <span className="v9-sub-text">{img.sub}</span>
                    <h4 className="v9-main-title">{img.title}</h4>
                  </div>
                  <div className="v9-overlay-icon">
                    <Camera size={20} color="white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(GallerySection);
