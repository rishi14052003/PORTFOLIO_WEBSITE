import React from 'react';

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">RJ</div>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#education" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
            <li><a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
