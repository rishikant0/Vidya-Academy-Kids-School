import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Sections.css';

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Parent of Aarav (UKG)", text: "Vidya Academy has been a blessing. The teachers are incredibly caring and the environment is so vibrant and safe!", color: "var(--soft-pink)", borderColor: "#F48FB1" },
    { name: "Rahul Verma", role: "Parent of Diya (Nursery)", text: "The play-based learning approach here is amazing. My daughter looks forward to going to school every single day.", color: "var(--sky-blue)", borderColor: "#4FC3F7" },
    { name: "Anita Singh", role: "Parent of Rohan (Class 1)", text: "Excellent facilities and focus on core skills. I have seen visible growth in Rohan's confidence and speaking abilities.", color: "var(--sunny-yellow)", borderColor: "#FFD54F" },
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge" style={{background: 'var(--bg-pink-soft)', color: 'var(--hot-pink)'}}>
            Testimonials
          </span>
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">Real stories from our happy Vidya Academy families</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div className="testimonial-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 150} style={{borderTop: `4px solid ${review.borderColor}`}}>
              <div className="quote-icon" style={{color: review.color}}>
                <Quote size={36} />
              </div>
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="var(--sunny-yellow)" color="var(--sunny-yellow)" />)}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: `linear-gradient(135deg, ${review.borderColor}, ${review.color})`}}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
