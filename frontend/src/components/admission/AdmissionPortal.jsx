import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import "./AdmissionPortal.css";

const AdmissionPortal = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="portal-section">

      {/* LEFT SIDE */}
      <div className="portal-left">
        <span className="badge">✨ New Admission 2026-27</span>

        <h1>
          Start a <span>Joyful</span><br />Journey!
        </h1>

        <p>
          Join Ranchi's most loved pre-school.  
          We inspire kids to grow, learn & shine ✨
        </p>

        <div className="features">
          <div>🚀 Smart Learning</div>
          <div>🎨 Creative Activities</div>
          <div>😊 Happy Environment</div>
          <div>💖 Caring Teachers</div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="portal-card">
        <form onSubmit={handleSubmit}>

          <label>Student's Name</label>
          <input placeholder="e.g. Little Arjun" required />

          <div className="row">
            <div>
              <label>Parent's Name</label>
              <input placeholder="Parent/Guardian Name" required />
            </div>

            <div>
              <label>Class For</label>
              <select required>
                <option>Select Class</option>
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
              </select>
            </div>
          </div>

          <label>Email Address</label>
          <input type="email" placeholder="hello@example.com" required />

          <label>Phone Number</label>
          <input placeholder="+91 XXXXX XXXXX" required />

          <button className="submit-btn">
            {loading ? <Loader2 className="spin" /> : <>Let's Get Started! <Send size={16} /></>}
          </button>

        </form>
      </div>

    </div>
  );
};

export default AdmissionPortal;