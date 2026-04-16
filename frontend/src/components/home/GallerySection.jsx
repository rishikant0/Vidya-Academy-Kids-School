import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';

// images
import heroBg from '../../assets/gallery/hero_bg.jpg';
import santaKids from '../../assets/gallery/santa_kids.jpg';
import clayActivity from '../../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../../assets/gallery/kids_slide.jpg';
import p8 from '../../assets/gallery/p8.jpeg';

const GallerySection = () => {

  const [activeImg, setActiveImg] = useState(null);

  const galleryImages = useMemo(() => [
    { src: heroBg, title: 'Our Campus', sub: 'Vidya Academy' },
    { src: santaKids, title: 'Daily Celebration', sub: 'Creative Fun' },
    { src: clayActivity, title: 'Art & Craft', sub: 'Clay Work' },
    { src: outdoorPlay, title: 'Outdoor Play', sub: 'Active Kids' },
    { src: kidsSlide, title: 'Park Fun', sub: 'Happy Moments' },
    { src: p8, title: 'Circle Time', sub: 'Group Learning' },
  ], []);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section className="v9-gallery-section">
      <div className="container">

        {/* HEADER */}
        <div className="v9-gallery-header">
          <span className="v9-gallery-badge">Gallery of Joy</span>
          <h2>Gallery Moments</h2>
          <p className="v9-gallery-subtitle">
            A glimpse into the vibrant life and happy faces within our campus.
          </p>
        </div>

        {/* GRID */}
        <div className="v9-gallery-grid">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="v9-gallery-card"
              onClick={() => setActiveImg(img.src)}   // ✅ OPEN MODAL
            >
              <div className="v9-gallery-img">

                {/* IMAGE WITH ZOOM */}
                <motion.img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                />

                {/* OVERLAY */}
                <div className="v9-gallery-overlay">
                  <div className="v9-overlay-text">
                    <span className="v9-sub-text">{img.sub}</span>
                    <h4 className="v9-main-title">{img.title}</h4>
                  </div>

                  <div className="v9-overlay-icon">
                    <Camera size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 FULLSCREEN MODAL */}
        {activeImg && (
          <div className="gallery-modal" onClick={() => setActiveImg(null)}>
            <button className="close-btn">
              <X size={26} />
            </button>
            <img src={activeImg} alt="preview" />
          </div>
        )}

      </div>
    </section>
  );
};

export default React.memo(GallerySection);