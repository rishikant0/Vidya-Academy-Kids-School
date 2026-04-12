import React, { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

import heroBg from '../assets/gallery/hero_bg.jpg';
import santaKids from '../assets/gallery/santa_kids.jpg';
import clayActivity from '../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../assets/gallery/kids_slide.jpg';
import gallery1 from '../assets/gallery1.png';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    { title: 'Vidya Academy Play School', img: heroBg },
    { title: 'Christmas Celebration', img: santaKids },
    { title: 'Clay Modeling Activity', img: clayActivity },
    { title: 'Outdoor Play Time', img: outdoorPlay },
    { title: 'Fun on the Slide', img: kidsSlide },
    { title: 'School Building', img: gallery1 },
    { title: 'Happy Classroom', img: '/kids_hero.png' },
    { title: 'Creative Learning', img: '/kids_learning.png' },
    { title: 'Outdoor Fun', img: '/kids_playing.png' },
    { title: 'Annual Day', img: '/kids_dance.png' },
    { title: 'Modern Classroom', img: '/kids_classroom.png' },
    { title: 'Art & Craft', img: '/about_kids.png' },
    { title: 'School Life', img: '/hero_banner.png' },
    { title: 'Activities', img: '/principal.png' },
  ];

  const sliderImages = galleryItems.filter(item => item.img);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="gallery-container">
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content" data-aos="fade-up">
          <span className="section-badge" style={{background: 'rgba(255,255,255,0.15)', color: 'var(--sunny-yellow)', border: '1px solid rgba(255,255,255,0.2)'}}>Gallery</span>
          <h1>Our Photo Gallery</h1>
          <p>A glimpse into the magical world of Vidya Academy Kids School</p>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="slider-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge" style={{background: 'var(--bg-blue-soft)', color: 'var(--deep-blue)'}}>Featured</span>
            <h2 className="section-title">Moments We Cherish</h2>
          </div>
          <div className="gallery-slider" data-aos="fade-up">
            <div className="slider-viewport">
              {sliderImages.map((item, idx) => (
                <div className={`slider-slide ${idx === currentSlide ? 'active' : ''}`} key={idx}>
                  <img src={item.img} alt={item.title} />
                  <div className="slider-caption"><h3>{item.title}</h3></div>
                </div>
              ))}
            </div>
            <button className="slider-btn slider-prev" onClick={prevSlide}><ChevronLeft size={24} /></button>
            <button className="slider-btn slider-next" onClick={nextSlide}><ChevronRight size={24} /></button>
            <div className="slider-dots">
              {sliderImages.map((_, idx) => (
                <button key={idx} className={`dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-grid-section section" style={{background: 'var(--bg-soft)'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge" style={{background: 'var(--bg-pink-soft)', color: 'var(--hot-pink)'}}>All Photos</span>
            <h2 className="section-title">Explore More</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div className="gallery-item" key={index} data-aos="fade-up" data-aos-delay={index * 80}>
                <img src={item.img} alt={item.title} />
                <div className="gallery-overlay"><h4>{item.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
