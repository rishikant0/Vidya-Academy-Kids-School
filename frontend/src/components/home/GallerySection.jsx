import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

// Import images
import heroBg from '../../assets/gallery/hero_bg.jpg';
import santaKids from '../../assets/gallery/santa_kids.jpg';
import clayActivity from '../../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../../assets/gallery/kids_slide.jpg';
import p8 from '../../assets/gallery/p8.jpeg';
import p9 from '../../assets/gallery/p9.jpeg';
import p10 from '../../assets/gallery/p10.jpeg';

const GallerySection = () => {
  const galleryImages = useMemo(() => [
    { src: heroBg, title: 'Vidya Academy Campus' },
    { src: santaKids, title: 'Christmas Celebration' },
    { src: clayActivity, title: 'Creative Clay Art' },
    { src: outdoorPlay, title: 'Outdoor Fun' },
    { src: kidsSlide, title: 'Playground Fun' },
    { src: p8, title: 'Art & Craft' },
  ], []);

  return (
    <section className="gallery-static-section section bg-soft">
      <div className="blob blob-blue" style={{ top: '0', left: '0', width: '300px', height: '300px', opacity: 0.05 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Gallery Moments</span>
          <h2 className="section-title">Capturing Joyful Moments 📸</h2>
          <p className="section-subtitle">A window into the vibrant life and happy faces within our campus.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ translateY: -10 }}
              className="gallery-item-card glass"
            >
              <div className="gallery-img-wrap">
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-hover-overlay">
                  <div className="overlay-icon"><Camera size={30} color="white" /></div>
                  <p>{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default React.memo(GallerySection);


