import React from 'react';
import { Globe, Code, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Hashini Nurasha Jayarathna</h3>
            <p>BSc (Hons) in Management & Information Technology Undergraduate</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/hashini-nurasha-2964243a1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="https://github.com/hashinijayarathna2003-beep" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Code size={20} />
            </a>
            <a href="mailto:hashinijayarathna2003@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hashini Nurasha Jayarathna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
