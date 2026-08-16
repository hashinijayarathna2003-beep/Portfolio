import React from 'react';
import { Users, Activity, Heart, Presentation } from 'lucide-react';
import './Extracurricular.css';

const Extracurricular = () => {
  const activities = [
    {
      icon: <Users size={24} />,
      title: 'Member of Kelani LED Club',
      role: 'Member',
      description: 'Active member of the Kelani LED Club, participating in club activities and gaining experience in teamwork, collaboration, and professional development.'
    }
  ];

  return (
    <section id="extracurricular" className="extracurricular">
      <div className="container">
        <h2 className="section-title">Extracurricular Activities</h2>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card card">
              <div className="activity-header">
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <div>
                  <h3>{activity.title}</h3>
                  <span className="activity-role">{activity.role}</span>
                </div>
              </div>
              <p className="activity-description">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
