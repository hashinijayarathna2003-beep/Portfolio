import React from 'react';
import { Globe, Code, Mail, Download, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Hashini Nurasha Jayarathna</h1>
          <h2 className="hero-title">
            BSc (Hons) in Management & Information Technology Undergraduate | Aspiring Business Analyst
          </h2>
          <p className="hero-summary">
            I am a passionate 2nd-year undergraduate interested in information technology, problem-solving, and building practical solutions. I am working towards a career as a Business Analyst, combining technical skills with business acumen to create value.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight size={18} />
            </a>
            <a href="/cv/Hashini_Jayarathna_CV.pdf" className="btn btn-outline" download="Hashini_Jayarathna_CV.pdf">
              Download CV <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://www.linkedin.com/in/hashini-nurasha-2964243a1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Globe size={24} />
            </a>
            <a href="https://github.com/hashinijayarathna2003-beep" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Code size={24} />
            </a>
            <a href="mailto:hashinijayarathna2003@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img src="/profile.jpg" alt="Hashini Nurasha Jayarathna" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
