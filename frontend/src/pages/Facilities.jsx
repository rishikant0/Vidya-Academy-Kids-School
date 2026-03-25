import React from 'react';
import { Bus, Book, Shield, Coffee, Tv, Gamepad } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  const facilitiesData = [
    { title: "Safe Transportation", desc: "GPS-enabled buses ensuring secure commutes with dedicated caretakers.", icon: <Bus size={36} color="var(--primary-yellow)" /> },
    { title: "Smart Classrooms", desc: "Interactive digital boards and visual learning aids in every room.", icon: <Tv size={36} color="var(--primary-blue)" /> },
    { title: "Creative Library", desc: "A colorful space filled with picture books and story-time corners.", icon: <Book size={36} color="var(--primary-pink)" /> },
    { title: "Indoor Play Area", desc: "Soft-cushioned zones for toddlers to safely jump, slide, and explore.", icon: <Gamepad size={36} color="var(--primary-green)" /> },
    { title: "Nutritious Cafeteria", desc: "Hygienic, healthy, and kid-approved meals supervised by nutritionists.", icon: <Coffee size={36} color="var(--primary-pink)" /> },
    { title: "24/7 Security", desc: "Full CCTV coverage, restricted entry, and well-trained security personnel.", icon: <Shield size={36} color="var(--primary-blue)" /> },
  ];

  return (
    <div className="facilities-container">
      <section className="facilities-header section text-center pattern-bg">
        <div className="container relative-container">
          {/* Decorative shapes */}
          <div className="floating-shape shape-pink"></div>
          <div className="floating-shape shape-yellow"></div>
          
          <h1 className="section-title" data-aos="fade-up">Our World-Class Facilities</h1>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Designed specifically for the safety, growth, and happiness of little learners.</p>
        </div>
      </section>

      <section className="facilities-grid-section section">
        <div className="container">
          <div className="facilities-grid">
            {facilitiesData.map((item, index) => (
              <div className={`facility-card style-${(index % 4) + 1}`} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="facility-icon-wrap">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
