import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {/* Placeholder Experience */}
          <div className="timeline-item card">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>[Role / Position]</h3>
                <span className="timeline-badge">[Job Type, e.g. Internship/Volunteer]</span>
              </div>
              <h4 className="timeline-institution">[Company / Organization]</h4>
              
              <div className="timeline-meta">
                <span className="meta-item">
                  <Calendar size={16} /> [Start Date] - [End Date]
                </span>
                <span className="meta-item">
                  <MapPin size={16} /> [Location]
                </span>
              </div>
              <p className="timeline-description">
                [Describe your responsibilities, tasks, and what you learned. Focus on technical skills, university projects, or leadership experience.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
