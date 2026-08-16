import React from 'react';
import { BookOpen, Code, Lightbulb, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const interests = [
    {
      icon: <Code size={24} />,
      title: 'Business Analysis',
      description: 'Analyzing business needs, gathering requirements, and proposing effective solutions.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Continuous Learning',
      description: 'Always eager to explore new technologies, frameworks, and best practices.'
    },
    {
      icon: <Target size={24} />,
      title: 'Problem Solving',
      description: 'Analyzing complex challenges and implementing effective technical solutions.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Real-World Systems',
      description: 'Applying theoretical knowledge to build practical systems that create value.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text card">
            <h3>My Journey & Goals</h3>
            <p>
              I am an undergraduate student pursuing a BSc (Hons) in Management & Information Technology at the University of Kelaniya, Sri Lanka. My academic journey has given me a strong foundation in both technical and management principles, allowing me to approach software development with a holistic view.
            </p>
            <p>
              My primary interest lies in Business Analysis and bridging the gap between business needs and technological solutions. I am passionate about understanding requirements, modeling processes, and ensuring that the final product creates real value for stakeholders.
            </p>
            <p>
              As an aspiring Business Analyst, my career goal is to contribute to innovative projects, continuously improve my analytical skills, and ultimately grow into a well-rounded IT professional capable of leading complex technological initiatives. I value teamwork, effective communication, and efficient time management in all my endeavors.
            </p>
          </div>
          
          <div className="about-interests">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card card">
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
