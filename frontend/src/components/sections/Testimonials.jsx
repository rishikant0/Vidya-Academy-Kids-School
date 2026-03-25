import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Sections.css';

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Parent of Aarav (UKG)", text: "Vidya Academy has been a blessing. The teachers are incredibly caring and the environment is so vibrant and safe!", color: "var(--primary-pink)" },
    { name: "Rahul Verma", role: "Parent of Diya (Nursery)", text: "The play-based learning approach here is amazing. My daughter looks forward to going to school every single day.", color: "var(--primary-blue)" },
    { name: "Anita Singh", role: "Parent of Rohan (Class 1)", text: "Excellent facilities and focus on core skills. I have seen visible growth in Rohan's confidence and speaking abilities.", color: "var(--primary-yellow)" },
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header text-center" style={{marginBottom: '50px'}} data-aos="fade-up">
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">Real stories from our happy Vidya Academy families</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div className="testimonial-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 150} style={{borderTop: `6px solid ${review.color}`}}>
              <div className="quote-icon" style={{color: review.color}}>
                <Quote size={40} />
              </div>
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="var(--primary-yellow)" color="var(--primary-yellow)" />)}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
