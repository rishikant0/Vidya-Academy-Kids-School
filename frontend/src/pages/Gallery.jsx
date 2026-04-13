import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { Camera } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

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

const Gallery = () => {
  const allPhotos = useMemo(() => [
    { title: 'Campus View', img: heroBg, tag: 'School' },
    { title: 'Christmas Fun', img: santaKids, tag: 'Events' },
    { title: 'Clay Modeling', img: clayActivity, tag: 'Activity' },
    { title: 'Outdoor Sports', img: outdoorPlay, tag: 'Activity' },
    { title: 'Playground Fun', img: kidsSlide, tag: 'Activity' },
    { title: 'Front Office', img: gallery1, tag: 'School' },
    { title: 'Smart Learning', img: p4, tag: 'Classroom' },
    { title: 'Caring Staff', img: p5, tag: 'Classroom' },
    { title: 'Art & Craft', img: p6, tag: 'Activity' },
    { title: 'Happy Kids', img: p7, tag: 'Moments' },
    { title: 'Group Study', img: p8, tag: 'Classroom' },
    { title: 'Physical Activity', img: p9, tag: 'Activity' },
    { title: 'Learning Joy', img: p10, tag: 'Classroom' },
    { title: 'Garden Play', img: p11, tag: 'Activity' },
    { title: 'Annual Day', img: p12, tag: 'Events' },
    { title: 'School Building', img: p14, tag: 'School' },
    { title: 'Assembly Hall', img: p15, tag: 'School' },
  ], []);

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="page-hero">
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="page-hero-content"
          >
            <span className="section-badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Memories</span>
            <h1>Our Vibrant Gallery</h1>
            <p>Every picture tells a story of discovery, laughter, and learning at Vidya Academy.</p>
          </motion.div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="gallery-featured section bg-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Featured</span>
            <h2 className="section-title">Moments We Cherish</h2>
          </div>

          <div className="featured-card-wrapper">
             <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                navigation={true}
                className="featured-swiper"
              >
                {allPhotos.slice(0, 6).map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="featured-slide-content">
                      <img src={item.img} alt={item.title} />
                      <div className="slide-overlay">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </section>

      {/* Full Grid */}
      <section className="gallery-grid-section section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Life @ Vidya</span>
            <h2 className="section-title">Capture The Joy</h2>
          </div>

          <div className="masonry-grid">
            {allPhotos.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 5) * 0.1 }}
                className="activity-card"
              >
                <img src={item.img} alt={item.title} />
                <div className="activity-overlay">
                  <span className="activity-tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
