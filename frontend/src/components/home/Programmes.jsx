import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Baby, Calendar, Clock, ArrowRight } from "lucide-react";

// Import images
import img1 from "../../assets/gallery/p4.jpeg";
import img2 from "../../assets/gallery/p10.jpeg";
import img3 from "../../assets/gallery/p12.jpeg";
import img4 from "../../assets/gallery/p14.jpeg";

const Programmes = () => {
  const programmes = [
    {
      title: "Pre-Nursery",
      img: img1,
      age: "2-3 yrs",
      days: "5 Days",
      time: "2.5 Hrs",
      color: "pink",
    },
    {
      title: "Nursery",
      img: img2,
      age: "3-4 yrs",
      days: "5 Days",
      time: "3.0 Hrs",
      color: "blue",
    },
    {
      title: "LKG",
      img: img3,
      age: "4-5 yrs",
      days: "5 Days",
      time: "3.5 Hrs",
      color: "orange",
    },
    {
      title: "UKG",
      img: img4,
      age: "5-6 yrs",
      days: "5 Days",
      time: "4.0 Hrs",
      color: "purple",
    },
  ];

  return (
    <section className="shanti-programmes">
      <div className="container">
        <div className="shanti-header">
          <span className="shanti-label">Learning Paths</span>
          <h2 className="shanti-heading">Our Programmes</h2>
          <p className="shanti-subheading">Nurturing every stage of early childhood with joy and expert care.</p>
        </div>

        <div className="shanti-grid">
          {programmes.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shanti-card"
            >
              <div className="shanti-img-wrap">
                <img src={prog.img} alt={prog.title} />
              </div>

              <div className="shanti-body">
                <h3 className="shanti-title">{prog.title}</h3>
                
                <div className="shanti-info-row">
                  <div className="shanti-info-item">
                    <Baby size={22} className="info-icon icon-pink" />
                    <strong>{prog.age}</strong>
                    <span>Age</span>
                  </div>
                  
                  <div className="shanti-info-item">
                    <Calendar size={22} className="info-icon icon-blue" />
                    <strong>{prog.days}</strong>
                    <span>Weekly</span>
                  </div>
                  
                  <div className="shanti-info-item">
                    <Clock size={22} className="info-icon icon-orange" />
                    <strong>{prog.time}</strong>
                    <span>Session</span>
                  </div>
                </div>

                <Link to="/admission" className="shanti-btn">
                  Enroll Now <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Programmes);
