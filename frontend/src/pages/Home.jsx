import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, ArrowRight, Sparkles, Star, Heart, ChevronLeft, ChevronRight, 
  GraduationCap, Users, BookOpen, Laptop, HeartHandshake, ShieldCheck, 
  Palmtree, Music, Camera, Palette, Trophy
} from 'lucide-react';
import './Home.css';

import heroBg from '../assets/gallery/hero_bg.jpg';
import santaKids from '../assets/gallery/santa_kids.jpg';
import clayActivity from '../assets/gallery/clay_activity.jpg';
import outdoorPlay from '../assets/gallery/outdoor_play.jpg';
import kidsSlide from '../assets/gallery/kids_slide.jpg';
import gallery1 from '../assets/gallery1.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryImages = [
    { src: heroBg, title: 'Vidya Academy Kids School' },
    { src: santaKids, title: 'Christmas Celebration' },
    { src: clayActivity, title: 'Creative Clay Art' },
    { src: outdoorPlay, title: 'Outdoor Fun & Games' },
    { src: kidsSlide, title: 'Happy Moments' },
    { src: gallery1, title: 'Our School Campus' },
    { src: '/kids_hero.png', title: 'Modern Classroom' },
    { src: '/kids_learning.png', title: 'Activity Based Learning' },
    { src: '/kids_playing.png', title: 'Playground Fun' },
    { src: '/kids_dance.png', title: 'Annual Day Function' },
    { src: '/about_kids.png', title: 'Creative Corner' },
    { src: '/hero_banner.png', title: 'School Entrance' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const whyTrustUs = [
    {
      title: "Smart Learning Environment",
      desc: "Modern classrooms equipped with interactive tools to spark curiosity and digital literacy from an early age.",
      icon: <Laptop size={32} />,
      badge: "Modern",
      color: "blue"
    },
    {
      title: "Experienced & Caring Teachers",
      desc: "Our educators are not just teachers but mentors who provide emotional support and personalized attention.",
      icon: <HeartHandshake size={32} />,
      badge: "Expert",
      color: "pink"
    },
    {
      title: "Safe & Secure Campus",
      desc: "CCTV-monitored campus with rigorous safety protocols to ensure your child's well-being is never compromised.",
      icon: <ShieldCheck size={32} />,
      badge: "Secure",
      color: "green"
    },
    {
      title: "Activity-Based Curriculum",
      desc: "A holistic blend of sports, arts, and academics designed to develop critical thinking and social skills.",
      icon: <BookOpen size={32} />,
      badge: "Holistic",
      color: "gold"
    }
  ];

  const activities = [
    { img: santaKids, title: "Christmas Fun", tag: "Creative", size: "large" },
    { img: clayActivity, title: "Clay Modeling", tag: "Art", size: "small" },
    { img: outdoorPlay, title: "Outdoor Sports", tag: "Sports", size: "medium" },
    { img: kidsSlide, title: "Play Time", tag: "Fun", size: "small" },
    { img: '/kids_dance.png', title: "Annual Dance", tag: "Culture", size: "medium" },
    { img: '/kids_learning.png', title: "Group Study", tag: "Social", size: "small" },
    { img: '/kids_hero.png', title: "Music Class", tag: "Music", size: "large" },
    { img: gallery1, title: "School Campus", tag: "Explore", size: "small" }
  ];

  return (
    <div className="home-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroBg} alt="Vidya Academy Play School" />
          <div className="hero-overlay"></div>
        </div>

        {/* Floating shapes */}
        <div className="hero-float float-1 animate-float"></div>
        <div className="hero-float float-2 animate-float-reverse"></div>
        <div className="hero-float float-3 animate-float"></div>
        <div className="hero-float float-4 animate-float-reverse"></div>

        {/* Floating kid photos */}
        <div className="hero-float-img float-img-1" data-aos="fade-up" data-aos-delay="500">
          <img src={clayActivity} alt="Kids learning" />
        </div>
        <div className="hero-float-img float-img-2" data-aos="fade-up" data-aos-delay="700">
          <img src={outdoorPlay} alt="Kids playing" />
        </div>

        <div className="container hero-inner">
          <div className="hero-badge" data-aos="fade-down">
            <Sparkles size={16} /> Welcome to Vidya Academy Kids School
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Welcome to <span className="text-gradient-gold">Vidya Academy</span> Kids School <span className="hero-emoji">🎓</span>
          </h1>
          <p className="hero-sub" data-aos="fade-up" data-aos-delay="200">
            Fun Learning • Creative Activities • Child Growth
          </p>
          <div className="hero-btns" data-aos="fade-up" data-aos-delay="300">
            <Link to="/admission" className="btn btn-secondary">Admission Open <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ========== UPGRADED WHY CHOOSE US ========== */}
      <section className="trust-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge premium-badge">Why Parents Trust Us</span>
            <h2 className="section-title">Nurturing Excellence Everyday</h2>
            <p className="section-subtitle">We provide a premium educational foundation through modern methods and compassionate care.</p>
          </div>

          <div className="trust-grid">
            {whyTrustUs.map((item, idx) => (
              <div className={`trust-card card-${item.color}`} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="trust-card-glass"></div>
                <div className="trust-icon-box">
                  {item.icon}
                  <span className="trust-badge">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="trust-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className="about-home section" style={{background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)'}}>
        <div className="container about-home-grid">
          <div className="about-home-img" data-aos="fade-right">
            <img src={clayActivity} alt="Kids learning together" />
            <div className="about-float-badge animate-pulse">
              <Star size={18} fill="#FFD54F" color="#FFD54F" />
              <span>12+ Years</span>
            </div>
          </div>
          <div className="about-home-text" data-aos="fade-left">
            <span className="section-badge badge-pink">About Our School</span>
            <h2>Friendly Environment With Focus on Fast Learning</h2>
            <p>Vidya Academy Kids School is dedicated to providing an atmosphere where children grow intellectually, emotionally, and physically through innovative and playful teaching methods.</p>
            <ul className="about-checks">
              <li><span className="ck blue">✓</span> Child-centric learning approach</li>
              <li><span className="ck pink">✓</span> Highly trained & loving staff</li>
              <li><span className="ck green">✓</span> Modern facility with advanced tools</li>
              <li><span className="ck gold">✓</span> Focus on personality development</li>
            </ul>
            <Link to="/about" className="btn btn-primary">Learn More <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ========== ENHANCED ACTIVITIES SECTION ========== */}
      <section className="activities-modern section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge badge-green">Exciting Activities</span>
            <h2 className="section-title">Where Every Day is an Adventure</h2>
            <p className="section-subtitle">Holistic development beyond the classroom through fun and engaging activities</p>
          </div>

          <div className="activity-masonry">
            {activities.map((act, idx) => (
              <div className={`activity-item ${act.size}`} key={idx} data-aos="zoom-in" data-aos-delay={idx * 50}>
                <img src={act.img} alt={act.title} />
                <div className="activity-overlay">
                  <span className="act-tag">{act.tag}</span>
                  <h4>{act.title}</h4>
                  <div className="act-zoom-icon"><Sparkles size={24} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY SLIDER ========== */}
      <section className="gallery-home section" style={{background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge badge-purple">Gallery</span>
            <h2 className="section-title">Moments We Cherish</h2>
            <p className="section-subtitle">A glimpse into the magical world of Vidya Academy</p>
          </div>

          <div className="gal-slider" data-aos="fade-up">
            <div className="gal-viewport">
              {galleryImages.map((img, idx) => (
                <div className={`gal-slide ${idx === currentSlide ? 'active' : ''}`} key={idx}>
                  <img src={img.src} alt={img.title} />
                  <div className="gal-caption"><h4>{img.title}</h4></div>
                </div>
              ))}
            </div>
            <button className="gal-btn gal-prev" onClick={() => setCurrentSlide(p => (p - 1 + galleryImages.length) % galleryImages.length)}><ChevronLeft size={22} /></button>
            <button className="gal-btn gal-next" onClick={() => setCurrentSlide(p => (p + 1) % galleryImages.length)}><ChevronRight size={22} /></button>
            <div className="gal-dots">
              {galleryImages.map((_, i) => (
                <button key={i} className={`gal-dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-home">
        <div className="cta-home-bg">
          <img src={outdoorPlay} alt="Happy kids" />
          <div className="cta-home-overlay"></div>
        </div>
        <div className="container cta-home-inner" data-aos="zoom-in">
          <h2>Give Your Child the Best Start <span className="hero-emoji">🚀</span></h2>
          <p>Join the Vidya Academy family today. Admissions are open for the upcoming session!</p>
          <div className="cta-home-btns">
            <Link to="/admission" className="btn btn-secondary">Apply Now <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn btn-white">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
