import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import './Education.css';

const Education = () => {
  const universityCoursework = [
    'Software Engineering',
    'Event Driven Programming',
    'Database Management',
    'Web Development',
    'Algorithms',
    'Systems Analysis and Design',
    'Operations Management',
    'Artificial Intelligence'
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          {/* School */}
          <div className="timeline-item card">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>G.C.E. Advanced Level (A/L)</h3>
                <span className="timeline-badge">School</span>
              </div>
              <h4 className="timeline-institution">Matara Central College, Matara</h4>
            </div>
          </div>

          {/* University */}
          <div className="timeline-item card">
            <div className="timeline-icon">
              <GraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>BSc (Hons) in Management & Information Technology</h3>
                <span className="timeline-badge">Undergraduate</span>
              </div>
              <h4 className="timeline-institution">University of Kelaniya</h4>
              
              <div className="timeline-meta">
                <span className="meta-item">
                  <Calendar size={16} /> Expected Graduation: 2028
                </span>
                <span className="meta-item">
                  <MapPin size={16} /> Sri Lanka
                </span>
              </div>
              
              <div className="coursework">
                <h5>Relevant Coursework:</h5>
                <ul className="coursework-list">
                  {universityCoursework.map((course, index) => (
                    <li key={index}>
                      <CheckCircle size={14} className="check-icon" /> {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
