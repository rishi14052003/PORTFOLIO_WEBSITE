import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-card intro-card">
        <div className="intro-avatar">RJ</div>
        <h1 className="intro-name">Rishabh Hitesh Jain</h1>
        <p className="intro-title">Software Engineer</p>
        <div className="intro-divider"></div>
        <p className="intro-subtitle">Full-Stack Development & Machine Learning</p>
      </div>

      <div className="sidebar-card about-card" id="about">
        <h2 className="sidebar-title">About Me</h2>
        <p className="sidebar-text">
          A skilled Software Engineer with expertise in Full-Stack Development and Machine Learning.
          Passionate about building scalable web applications and ML systems, with experience in
          cloud deployment and system architecture.
        </p>
      </div>

      <div className="sidebar-card contact-card" id="contact">
        <h2 className="sidebar-title">Contact</h2>
        <div className="contact-info">
          <a href="mailto:siddh2606@gmail.com" className="contact-item">
            <Mail className="contact-icon" size={20} />
            <span>siddh2606@gmail.com</span>
          </a>
          <a href="tel:+919099999309" className="contact-item">
            <Phone className="contact-icon" size={20} />
            <span>+91 90999 99309</span>
          </a>
          <a href="https://www.linkedin.com/in/rishabh-jain-a34623227/" target="_blank" rel="noreferrer" className="contact-item">
            <Linkedin className="contact-icon" size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/rishi14052003" target="_blank" rel="noreferrer" className="contact-item">
            <Github className="contact-icon" size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
