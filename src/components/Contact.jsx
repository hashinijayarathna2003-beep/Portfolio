import React, { useState } from 'react';
import { Mail, MapPin, Globe, Code, Send, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities, whether it's for an internship, 
              freelance project, or a full-time role. My inbox is always open. Whether you 
              have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Personal Email</h4>
                  <a href="mailto:hashinijayarathna2003@gmail.com">hashinijayarathna2003@gmail.com</a><br/>
                  <h4>University Email</h4>
                  <a href="mailto:hashininurasha3@gmail.com">hashininurasha3@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>0773604521</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Matara, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/hashini-nurasha-2964243a1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Globe size={24} />
                </a>
                <a href="https://github.com/hashinijayarathna2003-beep" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Code size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="Your Email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  placeholder="Subject"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
