import React from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const summaryPoints = [
    'BSc (Hons) in Management & Information Technology Undergraduate',
    'Enthusiastic about Business Analysis and requirements gathering',
    'Strong foundation in management principles and IT',
    'Practical problem-solving skills through university projects',
    'Committed to continuous learning and professional development'
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-container card">
          <div className="resume-content">
            <h2 className="resume-title">Resume & CV</h2>
            <p className="resume-description">
              Looking for a detailed overview of my education, skills, projects, and experience? 
              Download my complete professional CV to learn more about my background and how I can 
              contribute to your team.
            </p>
            
            <div className="resume-summary">
              <h3>Profile Summary</h3>
              <ul>
                {summaryPoints.map((point, index) => (
                  <li key={index}>
                    <CheckCircle size={16} className="check-icon" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="/[YOUR_CV_FILE_NAME].pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary resume-btn"
            >
              <Download size={20} /> Download My CV
            </a>
            <p className="resume-note">* Note: Replace the placeholder with the actual PDF link.</p>
          </div>
          
          <div className="resume-visual">
            <div className="resume-document">
              <FileText size={80} className="resume-icon" />
              <span>Curriculum Vitae</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
