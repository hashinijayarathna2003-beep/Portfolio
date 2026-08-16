import React from 'react';
import { Award, Medal, FileCheck } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      type: 'certification',
      icon: <FileCheck size={24} />,
      title: 'Business Analysis Basics',
      organization: 'Simplilearn',
      year: 'August 2026',
      link: '/certificates/ba-cert.pdf'
    },
    {
      type: 'award',
      icon: <Award size={24} />,
      title: 'IdeaSprint 2nd Runner-up',
      organization: 'University of Kelaniya',
      year: '2026',
      link: '/certificates/ideasprint-cert.jpg'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card card">
              <div className="achievement-icon">
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <p className="achievement-org">{item.organization}</p>
                <span className="achievement-year">{item.year}</span>
                {item.image && (
                  <div className="achievement-image-container">
                    <img src={item.image} alt={item.title} className="achievement-image" />
                  </div>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '1rem', display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.875rem'}}>
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
