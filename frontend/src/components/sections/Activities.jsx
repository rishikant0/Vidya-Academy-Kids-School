import React from 'react';
import { Music, Palette, Trophy, PartyPopper } from 'lucide-react';
import './Sections.css';

const Activities = () => {
  const activities = [
    { title: 'Annual Day Celebration', desc: 'A grand showcase of student talent and creativity on stage.', icon: <PartyPopper size={32} />, gradient: 'linear-gradient(135deg, #FFD54F, #FF9800)', shadow: 'rgba(255, 152, 0, 0.3)' },
    { title: 'Dance & Music', desc: 'Expressive arts to build confidence, coordination, and joy.', icon: <Music size={32} />, gradient: 'linear-gradient(135deg, #F48FB1, #E91E63)', shadow: 'rgba(233, 30, 99, 0.3)' },
    { title: 'Drawing & Art', desc: 'Unleashing imagination through vibrant colors and crafts.', icon: <Palette size={32} />, gradient: 'linear-gradient(135deg, #4FC3F7, #1565C0)', shadow: 'rgba(21, 101, 192, 0.3)' },
    { title: 'Games & Play', desc: 'Fun outdoor and indoor activities for physical health and teamwork.', icon: <Trophy size={32} />, gradient: 'linear-gradient(135deg, #81C784, #43A047)', shadow: 'rgba(67, 160, 71, 0.3)' }
  ];

  return (
    <section className="activities-section section" style={{background: 'var(--bg-soft)'}}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge" style={{background: 'var(--bg-green-soft)', color: 'var(--fresh-green)'}}>
            Activities
          </span>
          <h2 className="section-title">Exciting Activities</h2>
          <p className="section-subtitle">Holistic development beyond the classroom through fun and engaging activities</p>
        </div>

        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div className="activity-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 120}>
              <div className="activity-icon" style={{ background: act.gradient, boxShadow: `0 8px 20px ${act.shadow}` }}>
                {act.icon}
              </div>
              <h4>{act.title}</h4>
              <p>{act.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
