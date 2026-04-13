import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Import images
import santaKids from '../../assets/gallery/santa_kids.jpg';
import clayActivity from '../../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../../assets/gallery/kids_slide.jpg';
import p8 from '../../assets/gallery/p8.jpeg';
import p9 from '../../assets/gallery/p9.jpeg';
import p10 from '../../assets/gallery/p10.jpeg';

const ActivityMasonry = () => {
  const activities = useMemo(() => [
    { img: santaKids, title: "Christmas Joy", tag: "Creative" },
    { img: clayActivity, title: "Art Attack", tag: "Art" },
    { img: outdoorPlay, title: "Fun Sports", tag: "Sports" },
    { img: kidsSlide, title: "Play Time", tag: "Fun" },
    { img: p8, title: "Creative Craft", tag: "Craft" },
    { img: p9, title: "Group Play", tag: "Logic" },
    { img: p10, title: "Daily Lessons", tag: "Class" }
  ], []);

  return (
    <section className="activities-section section">
      <div className="blob blob-pink" style={{ top: '50%', left: '-10%', opacity: 0.05 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Activities</span>
          <h2 className="section-title">Small Hands, Big Wonders ✨</h2>
          <p className="section-subtitle">A glimpse into the daily joy and creative learning at Vidya Academy.</p>
        </div>

        <div className="masonry-grid">
          {activities.map((act, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="activity-card"
            >
              <img src={act.img} alt={act.title} loading="lazy" />
              <div className="activity-overlay">
                <span className="activity-tag">{act.tag}</span>
                <h4>{act.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default React.memo(ActivityMasonry);

