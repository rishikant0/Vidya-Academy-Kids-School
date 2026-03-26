import React from 'react';
import { BookOpen, TrendingUp, Presentation } from 'lucide-react';
import './Sections.css';

const Curriculum = () => {
  const items = [
    { icon: <TrendingUp size={32} />, title: 'Fast Learning Techniques', desc: 'Scientifically proven methods helping children grasp concepts faster while enjoying the process.', color: 'var(--sky-blue)', bg: 'var(--bg-blue-soft)' },
    { icon: <Presentation size={32} />, title: 'Play-Based Learning', desc: 'Education seamlessly integrated with play, ensuring students remain engaged and excited.', color: 'var(--hot-pink)', bg: 'var(--bg-pink-soft)' },
    { icon: <BookOpen size={32} />, title: 'Core Skills Focus', desc: 'Emphasizing essential reading, writing, and speaking skills to prepare them for higher classes.', color: 'var(--fresh-green)', bg: 'var(--bg-green-soft)' },
  ];

  return (
    <section className="curriculum-section section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge" style={{background: 'var(--bg-blue-soft)', color: 'var(--deep-blue)'}}>
            Curriculum
          </span>
          <h2 className="section-title">Our Curriculum</h2>
          <p className="section-subtitle">Pre Nursery to Class 1 - Building a strong foundation for life</p>
        </div>

        <div className="curriculum-content">
          {items.map((item, idx) => (
            <div className="curriculum-item" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="c-icon" style={{ background: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <div className="c-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
