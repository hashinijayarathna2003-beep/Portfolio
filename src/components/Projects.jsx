import React from 'react';
import { Code, ExternalLink, Clock } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'OpenSpace – Smart Parking Marketplace',
      status: 'Currently in Development',
      description: 'OpenSpace is a smart parking marketplace designed to connect drivers with available private parking spaces, making parking easier, faster, and more convenient.',
      problem: 'Finding reliable parking in congested areas is time-consuming and frustrating, while private parking spaces remain underutilized.',
      contribution: 'Currently designing and developing the platform, including the user experience, parking marketplace concept, core features, and system functionality.',
      technologies: [],
      features: ['Parking search', 'Nearby parking locations', 'Parking details', 'Parking booking', 'QR-based check-in', 'Parking owner dashboard', 'Ratings and reviews', 'Nearby vehicle support services'],
      github: '',
      demo: ''
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A full-stack team task management system built as a group project, supporting projects, tasks, comments, file attachments, labels, and real-time notifications. Includes secure JWT-based authentication and a fully documented REST API with Swagger docs.',
      problem: 'Individuals and small teams often struggle to keep track of tasks, deadlines, and responsibilities without a centralized system.',
      contribution: 'Full-stack Developer / Team Lead',
      technologies: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'JWT', 'Jest', 'GitHub Actions', 'Azure Static Web Apps'],
      features: ['Create and manage projects, tasks, comments, and labels', 'File attachment uploads via Supabase Storage', 'Real-time notification system', 'Secure authentication with JWT', 'Automated email notifications (SMTP)', 'Interactive REST API documentation'],
      github: 'https://github.com/praveen-madawalage/Task-Management-Web-Project',
      demo: 'https://orange-mushroom-072c7d500.7.azurestaticapps.net'
    },
    {
      id: 3,
      title: 'Connect Four Game (C++)',
      description: 'A colorful console-based Connect Four game built in C++ for two players, featuring win detection logic and an ANSI-colored terminal interface.',
      problem: 'Implementing a classic board game in a console environment while correctly detecting all possible win conditions (horizontal, vertical, & diagonal).',
      contribution: 'Practiced 2D array manipulation, function decomposition, algorithmic thinking for win-condition checking, and version control with Git/GitHub.',
      technologies: ['C++', 'Console Application', 'Algorithms', 'OOP Concepts', 'Git/GitHub'],
      features: ['Two-player gameplay', 'Win detection logic (horizontal, vertical, diagonal)', 'ANSI-colored terminal interface'],
      github: 'https://github.com/hashinijayarathna2003-beep/Connect-Four-Game',
      demo: 'https://github.com/hashinijayarathna2003-beep/Connect-Four-Game'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects Showcase</h2>
        
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-content-wrapper">
                <div className="project-overview">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.status && (
                      <span className="project-status-badge">
                        <Clock size={14} /> {project.status}
                      </span>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-section">
                    <h4><Code size={16} /> Problem Solved</h4>
                    <p>{project.problem}</p>
                  </div>
                  
                  <div className="project-section">
                    <h4><Code size={16} /> My Contribution</h4>
                    <p>{project.contribution}</p>
                  </div>
                </div>

                <div className="project-details">
                  <div className="project-section">
                    <h4><Code size={16} /> Key Features</h4>
                    <ul className="project-features">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="project-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="project-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="project-links">
                {project.github && project.github !== '[LINK]' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-btn">
                    <Code size={18} /> Code
                  </a>
                )}
                {project.demo && project.demo !== '[LINK]' && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                    <ExternalLink size={18} /> Live Demo
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

export default Projects;
