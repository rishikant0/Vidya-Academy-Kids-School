import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smile, Zap, Puzzle, Shield, ArrowRight, Sparkles, Star, Heart, ChevronLeft, ChevronRight, Quote, GraduationCap, Users, Trophy } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryImages = [
    { src: '/kids_hero.png', title: 'Happy Classroom' },
    { src: '/kids_learning.png', title: 'Creative Learning' },
    { src: '/kids_playing.png', title: 'Outdoor Fun' },
    { src: '/kids_dance.png', title: 'Annual Day' },
    { src: '/kids_classroom.png', title: 'Modern Classroom' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const reviews = [
    { name: "Priya Sharma", role: "Parent of Aarav (UKG)", text: "My child absolutely loves this school! The teachers are caring and the environment is wonderful.", avatar: "PS", color: "#F48FB1" },
    { name: "Rahul Verma", role: "Parent of Diya (Nursery)", text: "The play-based approach is amazing. Diya looks forward to school every single day!", avatar: "RV", color: "#4FC3F7" },
    { name: "Anita Singh", role: "Parent of Rohan (Class 1)", text: "Excellent facilities. I've seen visible growth in Rohan's confidence and speaking skills.", avatar: "AS", color: "#FFD54F" },
  ];

  return (
    <div className="home-page">

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/kids_hero.png" alt="Happy children learning" />
          <div className="hero-overlay"></div>
        </div>

        {/* Floating shapes */}
        <div className="hero-float float-1 animate-float"></div>
        <div className="hero-float float-2 animate-float-reverse"></div>
        <div className="hero-float float-3 animate-float"></div>
        <div className="hero-float float-4 animate-float-reverse"></div>

        {/* Floating kid photos */}
        <div className="hero-float-img float-img-1" data-aos="fade-up" data-aos-delay="500">
          <img src="/kids_learning.png" alt="Kids learning" />
        </div>
        <div className="hero-float-img float-img-2" data-aos="fade-up" data-aos-delay="700">
          <img src="/kids_playing.png" alt="Kids playing" />
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

          {/* Stats */}
          <div className="hero-stats-bar" data-aos="fade-up" data-aos-delay="400">
            <div className="hstat"><GraduationCap size={20} /><div><strong>500+</strong><span>Happy Students</span></div></div>
            <div className="hstat-line"></div>
            <div className="hstat"><Users size={20} /><div><strong>50+</strong><span>Expert Teachers</span></div></div>
            <div className="hstat-line"></div>
            <div className="hstat"><Trophy size={20} /><div><strong>12+</strong><span>Years Excellence</span></div></div>
          </div>
        </div>

        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ========== FEATURES WITH IMAGES ========== */}
      <section className="features-img section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge badge-blue">Why Choose Us</span>
            <h2 className="section-title">Why Parents Trust Us</h2>
            <p className="section-subtitle">We create the perfect blend of education and fun for your child's holistic growth</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feat-photo">
                <img src="/kids_learning.png" alt="Child Growth" />
                <div className="feat-photo-badge badge-pink"><Heart size={16} /> Growth</div>
              </div>
              <div className="feat-body">
                <h3>Child Growth</h3>
                <p>Nurturing cognitive, social, and emotional development in every child through personalized care and attention.</p>
              </div>
            </div>

            <div className="feat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feat-photo">
                <img src="/kids_dance.png" alt="Activities" />
                <div className="feat-photo-badge badge-yellow"><Sparkles size={16} /> Activities</div>
              </div>
              <div className="feat-body">
                <h3>Activity-Based Learning</h3>
                <p>Drawing, dancing, music, sports — education blended with play keeps children curious and excited.</p>
              </div>
            </div>

            <div className="feat-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feat-photo">
                <img src="/kids_classroom.png" alt="Safe Environment" />
                <div className="feat-photo-badge badge-green"><Shield size={16} /> Safe</div>
              </div>
              <div className="feat-body">
                <h3>Safe Environment</h3>
                <p>CCTV-monitored campus with trained staff ensuring your child's safety is always our top priority.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className="about-home section" style={{background: '#f8f9ff'}}>
        <div className="container about-home-grid">
          <div className="about-home-img" data-aos="fade-right">
            <img src="/kids_learning.png" alt="Kids learning together" />
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

      {/* ========== ACTIVITIES IMAGE GRID ========== */}
      <section className="act-grid-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge badge-green">Activities</span>
            <h2 className="section-title">Exciting Activities</h2>
            <p className="section-subtitle">Holistic development beyond the classroom through fun and engaging activities</p>
          </div>

          <div className="act-photo-grid">
            <div className="act-photo-item act-large" data-aos="fade-up">
              <img src="/kids_dance.png" alt="Annual Day" />
              <div className="act-photo-overlay"><h4>🎭 Annual Day</h4></div>
            </div>
            <div className="act-photo-item" data-aos="fade-up" data-aos-delay="100">
              <img src="/kids_learning.png" alt="Drawing & Art" />
              <div className="act-photo-overlay"><h4>🎨 Drawing & Art</h4></div>
            </div>
            <div className="act-photo-item" data-aos="fade-up" data-aos-delay="200">
              <img src="/kids_playing.png" alt="Games & Play" />
              <div className="act-photo-overlay"><h4>⚽ Games & Play</h4></div>
            </div>
            <div className="act-photo-item" data-aos="fade-up" data-aos-delay="300">
              <img src="/kids_hero.png" alt="Music & Dance" />
              <div className="act-photo-overlay"><h4>💃 Music & Dance</h4></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SLIDER ========== */}
      <section className="gallery-home section" style={{background: '#f0f4ff'}}>
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

      {/* ========== TESTIMONIALS ========== */}
      <section className="test-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge badge-pink">Testimonials</span>
            <h2 className="section-title">What Parents Say</h2>
            <p className="section-subtitle">Real stories from happy Vidya Academy families</p>
          </div>

          <div className="test-grid">
            {reviews.map((r, idx) => (
              <div className="test-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 120} style={{borderTop: `4px solid ${r.color}`}}>
                <div className="test-quote"><Quote size={30} /></div>
                <div className="test-stars">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FFD54F" color="#FFD54F" />)}
                </div>
                <p className="test-text">"{r.text}"</p>
                <div className="test-author">
                  <div className="test-avatar" style={{background: `linear-gradient(135deg, ${r.color}, ${r.color}dd)`}}>{r.avatar}</div>
                  <div>
                    <h4>{r.name}</h4>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-home">
        <div className="cta-home-bg">
          <img src="/kids_playing.png" alt="Happy kids" />
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
