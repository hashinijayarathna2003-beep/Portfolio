import React from 'react';
import { Terminal, Globe, Database, Wrench, Cpu, Users } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Terminal size={24} />,
      skills: ['Java', 'Kotlin', 'JavaScript', 'C++']
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js']
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MySQL', 'Supabase']
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <Wrench size={24} />,
      skills: ['Android Studio', 'Visual Studio Code', 'Git', 'GitHub', 'Postman', 'Docker']
    },
    {
      id: 'other',
      title: 'Other Technologies',
      icon: <Cpu size={24} />,
      skills: ['Firebase', 'Google Maps API', 'REST APIs']
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: ['Problem Solving', 'Teamwork', 'Communication', 'Time Management', 'Leadership', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical & Soft Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category card">
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
