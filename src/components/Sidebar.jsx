import React from 'react';

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
          <a href="mailto:rishabh.jain@example.com" className="contact-item">
            <span className="contact-icon">📧</span>
            <span>rishabh.jain@example.com</span>
          </a>
          <a href="tel:+919876543210" className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+91 98765 43210</span>
          </a>
          <a href="https://linkedin.com/in/rishi14052003" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/rishi14052003" target="_blank" rel="noreferrer" className="contact-item">
            <span className="contact-icon">🐙</span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
