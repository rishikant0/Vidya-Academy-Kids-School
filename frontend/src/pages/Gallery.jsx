import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, LayoutGrid, Sparkles, X, Maximize2, Filter, Image as ImageIcon } from 'lucide-react';
import './Gallery.css';

// Import local images
import heroBg from '../assets/gallery/hero_bg.jpg';
import santaKids from '../assets/gallery/santa_kids.jpg';
import clayActivity from '../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../assets/gallery/kids_slide.jpg';
import gallery1 from '../assets/gallery1.png';
import p4 from '../assets/gallery/p4.jpeg';
import p5 from '../assets/gallery/p5.jpeg';
import p6 from '../assets/gallery/p6.jpeg';
import p7 from '../assets/gallery/p7.jpeg';
import p8 from '../assets/gallery/p8.jpeg';
import p9 from '../assets/gallery/p9.jpeg';
import p10 from '../assets/gallery/p10.jpeg';
import p11 from '../assets/gallery/p11.jpeg';
import p12 from '../assets/gallery/p12.jpeg';
import p13 from '../assets/gallery/p13.jpeg';
import p14 from '../assets/gallery/p14.jpeg';
import p15 from '../assets/gallery/p15.jpeg';
import gardeningActivity from '../assets/gallery/gardening_activity.jpg';
import santaKid2 from '../assets/gallery/santa_kid_2.jpg';
import playgroundSwings from '../assets/gallery/playground_swings.jpg';
import krishnaCostume from '../assets/gallery/krishna_costume.jpg';
import krishnaCostume2 from '../assets/gallery/krishna_costume_2.jpg';
import redDayActivity from '../assets/gallery/red_day_activity.jpg';
import rockingHorseFun from '../assets/gallery/rocking_horse_fun.jpg';
import ballPoolSplash from '../assets/gallery/ball_pool_splash.jpg';
import indoorSlideFun from '../assets/gallery/indoor_slide_fun.jpg';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = ['All', 'School', 'Classroom', 'Activity', 'Events'];

  const allPhotos = useMemo(() => [
    // { id: 1, title: 'Campus View', img: heroBg, tag: 'School', size: 'large' },
    { id: 2, title: 'Christmas Fun', img: santaKids, tag: 'Events', size: 'medium' },
    { id: 3, title: 'Clay Modeling', img: clayActivity, tag: 'Activity', size: 'small' },
    { id: 4, title: 'Outdoor Sports', img: outdoorPlay, tag: 'Activity', size: 'medium' },
    { id: 5, title: 'Playground Fun', img: kidsSlide, tag: 'Activity', size: 'small' },
    
    { id: 7, title: 'Smart Learning', img: p4, tag: 'Classroom', size: 'large' },
    { id: 8, title: 'Caring Staff', img: p5, tag: 'Classroom', size: 'small' },
    { id: 9, title: 'Art & Craft', img: p6, tag: 'Activity', size: 'medium' },
    { id: 10, title: 'Happy Kids', img: p7, tag: 'Events', size: 'small' },
    { id: 11, title: 'Group Study', img: p8, tag: 'Classroom', size: 'medium' },
    { id: 12, title: 'Physical Activity', img: p9, tag: 'Activity', size: 'large' },
    { id: 13, title: 'Learning Joy', img: p10, tag: 'Classroom', size: 'small' },
    { id: 14, title: 'Garden Play', img: p11, tag: 'Activity', size: 'medium' },
    { id: 15, title: 'Annual Day', img: p12, tag: 'Events', size: 'medium' },
    { id: 16, title: 'School Building', img: p14, tag: 'School', size: 'large' },
    { id: 17, title: 'Assembly Hall', img: p15, tag: 'School', size: 'medium' },
    { id: 18, title: 'Plantation Day', img: gardeningActivity, tag: 'Activity', size: 'large' },
    { id: 19, title: 'Little Santa', img: santaKid2, tag: 'Events', size: 'small' },
    { id: 20, title: 'Park Fun', img: playgroundSwings, tag: 'Activity', size: 'medium' },
    { id: 21, title: 'Krishna Celebration', img: krishnaCostume, tag: 'Events', size: 'large' },
    { id: 22, title: 'Religious Costume Day', img: krishnaCostume2, tag: 'Events', size: 'medium' },
    { id: 23, title: 'Red Day Celebration', img: redDayActivity, tag: 'Events', size: 'medium' },
    { id: 24, title: 'Rocking Horse Fun', img: rockingHorseFun, tag: 'Activity', size: 'small' },
    { id: 25, title: 'Pool Splash', img: ballPoolSplash, tag: 'Activity', size: 'large' },
    { id: 26, title: 'Indoor Play Zone', img: indoorSlideFun, tag: 'Activity', size: 'medium' },
  ], []);

  const filteredPhotos = useMemo(() => {
    return filter === 'All' ? allPhotos : allPhotos.filter(photo => photo.tag === filter);
  }, [filter, allPhotos]);

  return (
    <div className="gallery-page-v2">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-lightbox" onClick={() => setSelectedImg(null)}><X size={30} /></button>
              <img src={selectedImg.img} alt={selectedImg.title} />
              <div className="lightbox-caption">
                <h3>{selectedImg.title}</h3>
                <span className="badge">{selectedImg.tag}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Hero Section - Compact */}
      <section className="gallery-hero-v3">
        <div className="v3-bg-canvas">
          <div className="v3-mesh"></div>
          <div className="v3-blob blob-p"></div>
          <div className="v3-blob blob-b"></div>
        </div>

        {/* Floating Playful Elements */}
        <div className="v3-floating-decor">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="v3-item">🎈</motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="v3-item">⭐</motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="v3-item">🧸</motion.div>
        </div>

        <div className="container">
          <div className="hero-flex-v3">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="hero-left-v3"
            >
              <h1 className="v3-title">School <span className="v3-gradient-text">Gallery</span></h1>
              <p className="v3-subtitle">Capturing the joy and discovery in every corner of our school.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hero-right-v3"
            >
              <div className="camera-badge-v3">
                <Camera size={40} strokeWidth={1.5} />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="v3-wave-divider">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C480,110 960,10 1440,60 L1440,100 L0,100 Z" fill="var(--bg-soft)"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="gallery-main-v3">
        <div className="container">
          
          {/* Filter Pills */}
          <div className="v3-filters">
            {categories.map((cat) => (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                key={cat} 
                className={`v3-filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Optimized Masonry Grid */}
          <motion.div layout className="v3-masonry">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo) => (
                <motion.div 
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  className={`v3-gallery-card ${photo.size}`}
                  onClick={() => setSelectedImg(photo)}
                >
                  <div className="v3-card-inner glass">
                    <img src={photo.img} alt={photo.title} loading="lazy" />
                    <div className="v3-overlay">
                      <div className="v3-overlay-content">
                        <span className="v3-tag">{photo.tag}</span>
                        <h3>{photo.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Floating Shapes behind grid for depth */}
          <div className="grid-bg-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="v3-footer">
             <button className="btn btn-premium-v2">View More Memories <Sparkles size={18} /></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
