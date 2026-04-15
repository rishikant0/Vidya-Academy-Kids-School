import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

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
    { img: santaKids, title: "Christmas Joy", tag: "Creative", color: "#f43f5e" },
    { img: clayActivity, title: "Art Attack", tag: "Art", color: "#3b82f6" },
    { img: outdoorPlay, title: "Fun Sports", tag: "Sports", color: "#10b981" },
    { img: kidsSlide, title: "Play Time", tag: "Fun", color: "#f59e0b" },
    { img: p8, title: "Creative Craft", tag: "Craft", color: "#8b5cf6" },
    { img: p9, title: "Group Play", tag: "Logic", color: "#ec4899" },
    { img: p10, title: "Daily Lessons", tag: "Class", color: "#06b6d4" }
  ], []);

  return (
    <section className="activities-v8">
      <div className="container">
        <div className="v8-header">
          <span className="v8-badge">Gallery of Joy</span>
          <h2 className="shanti-heading">Our Activities</h2>
          <p className="v8-subtitle">Small Hands, Big Wonders ✨<br />
          <span>A glimpse into the daily joy and creative learning at Vidya Academy.</span></p>
        </div>

        <div className="v8-masonry">
          {activities.map((act, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                transition: { duration: 0.4 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="v8-act-card"
            >
              <div className="v8-img-inner">
                <img src={act.img} alt={act.title} loading="lazy" />
                
                {/* 🏷️ RESPONSIVE OVERLAY (Always visible on mobile) */}
                <div className="v8-overlay-v2 activities-mobile-overlay">
                  <div className="v8-overlay-content">
                    <span className="v8-act-tag" style={{ backgroundColor: act.color }}>{act.tag}</span>
                    <h4>{act.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ActivityMasonry);
