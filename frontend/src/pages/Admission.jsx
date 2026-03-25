import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Admission.css';

const Admission = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    // NOTE TO USER: Replace these placeholder credentials with your actual EmailJS credentials!
    // 1. Create an account at emailjs.com
    // 2. Add an Email Service (e.g. Gmail)
    // 3. Create an Email Template. Use variables: {{student_name}}, {{parent_name}}, {{parent_email}}, {{phone}}, {{class}}
    // 4. To send to the parent as well, enable "Auto-Reply" in your EmailJS template settings and set the 'To' email as {{parent_email}}
    
    const serviceID = 'YOUR_SERVICE_ID'; // e.g., 'service_xxxxx'
    const templateID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xxxxx'
    const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'abc123DEF456ghi'

    // If credentials are not set up yet, simulate the submission for the UI
    if (serviceID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setIsLoading(false);
        setSubmitted(true);
      }, (error) => {
        setIsLoading(false);
        setErrorMsg('Failed to send application. Please try again or contact us directly.');
        console.log(error.text);
      });
  };

  return (
    <div className="admission-container">
      <section className="admission-header section text-center">
        <div className="container">
          <h1 className="section-title" data-aos="fade-down">Admissions Open</h1>
          <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">Join the Vidya Academy family! Apply now to secure a bright future for your child.</p>
        </div>
      </section>

      <section className="admission-form-section section">
        <div className="container">
          <div className="form-wrapper" data-aos="fade-up">
            {submitted ? (
              <div className="success-message text-center">
                <CheckCircle size={80} color="var(--primary-green)" className="success-icon" />
                <h2>Application Submitted Successfully!</h2>
                <p>Thank you for applying. A confirmation email has been sent to you, and our admission team will contact you shortly.</p>
                <button className="btn btn-primary mt-4" onClick={() => setSubmitted(false)}>Submit Another Application</button>
              </div>
            ) : (
              <div className="form-card">
                <h2>Application Form</h2>
                <p className="form-desc">Please fill out all the details carefully.</p>
                
                {errorMsg && <div className="error-message" style={{color: 'red', marginBottom: '20px', textAlign: 'center'}}>{errorMsg}</div>}

                <form ref={form} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Student Name</label>
                    <input type="text" name="student_name" placeholder="Enter child's full name" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Parent Name</label>
                    <input type="text" name="parent_name" placeholder="Enter parent's full name" required />
                  </div>

                  <div className="form-group">
                    <label>Parent Email</label>
                    <input type="email" name="parent_email" placeholder="Enter parent's email address" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+91 xxxxxxxxxx" required />
                    </div>
                    
                    <div className="form-group">
                      <label>Class Selection</label>
                      <select name="class" required defaultValue="">
                        <option value="" disabled>Select class</option>
                        <option value="prenursery">Pre Nursery</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="class1">Class 1</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn" disabled={isLoading}>
                    {isLoading ? <><Loader2 className="spinner animate-spin" size={20} /> Sending...</> : <>Submit Application <Send size={20} /></>}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
