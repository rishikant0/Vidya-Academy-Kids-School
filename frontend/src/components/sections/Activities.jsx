import React from 'react';
import { Music, Palette, Trophy, PartyPopper } from 'lucide-react';
import './Sections.css';

const Activities = () => {
  const activities = [
    { title: 'Annual Day Celebration', desc: 'A grand showcase of student talent and creativity.', icon: <PartyPopper size={32} />, color: 'var(--primary-yellow)' },
    { title: 'Dance & Music', desc: 'Expressive arts to build confidence and coordination.', icon: <Music size={32} />, color: 'var(--primary-pink)' },
    { title: 'Drawing & Art', desc: 'Unleashing imagination through vibrant colors and crafts.', icon: <Palette size={32} />, color: 'var(--primary-blue)' },
    { title: 'Games & Fun Learning', desc: 'Outdoor and indoor activities for physical health.', icon: <Trophy size={32} />, color: 'var(--primary-green)' }
  ];

  return (
    <section className="activities-section section">
      <div className="container">
        <div className="section-header text-center" style={{marginBottom: '50px'}} data-aos="fade-up">
          <h2 className="section-title">Exciting Activities</h2>
          <p className="section-subtitle">Holistic development beyond the classroom</p>
        </div>
        
        <div className="activities-grid">
          {activities.map((act, idx) => (
            <div className="activity-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <div className="act-icon" style={{ backgroundColor: act.color }}>{act.icon}</div>
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
