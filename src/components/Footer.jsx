import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>Rishabh Hitesh Jain</p>
          <div className="social-links">
            <a href="https://github.com/rishi14052003" target="_blank" rel="noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rishabh-jain-a34623227/" target="_blank" rel="noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:siddh2606@gmail.com" target="_blank" rel="noreferrer" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
