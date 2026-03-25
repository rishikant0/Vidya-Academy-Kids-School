import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  // Pastel placeholders to keep it colorful and child-friendly
  const galleryItems = [
    { title: 'Art & Craft', color: 'var(--primary-pink)', delay: '0.1s', img: '/gallery_1.png' },
    { title: 'Annual Day', color: 'var(--primary-blue)', delay: '0.2s', img: '/gallery_2.png' },
    { title: 'Sports Day', color: 'var(--primary-yellow)', delay: '0.3s', img: '/gallery_3.png' },
    { title: 'Library Fun', color: 'var(--primary-green)', delay: '0.4s', img: '/gallery_4.png' },
    { title: 'Kids Activities', color: 'var(--primary-pink)', delay: '0.5s', img: '/happy_kids_hero.png' },
    { title: 'Classroom Fun', color: 'var(--primary-blue)', delay: '0.6s' },
    { title: 'Dance Classes', color: 'var(--primary-green)', delay: '0.7s' },
    { title: 'Story Time', color: 'var(--primary-green)', delay: '0.8s' },
  ];

  return (
    <div className="gallery-container">
      <section className="gallery-header section">
        <div className="container text-center">
          <div className="header-icon animate-float" data-aos="zoom-in">
            <Camera size={56} color="var(--primary-blue)" />
          </div>
          <h1 className="section-title" data-aos="fade-up">Our Photo Gallery</h1>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">A glimpse into the magical world of Vidya Academy Kids School</p>
        </div>
      </section>

      <section className="gallery-grid-section section">
        <div className="container">
          <div className="masonry-grid">
            {galleryItems.map((item, index) => (
              <div 
                className={`gallery-item height-${(index % 3) + 1}`} 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {item.img ? (
                  <div className="gallery-img-wrapper" style={{ width: '100%', height: '100%' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div className="gallery-img-placeholder" style={{ backgroundColor: item.color }}>
                    <ImageIcon size={48} color="rgba(255,255,255,0.5)" />
                  </div>
                )}
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
