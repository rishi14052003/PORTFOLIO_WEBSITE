import React from 'react';

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className="nav">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="nav-logo">RJ</div>
          <ul className="flex space-x-8">
            <li><a href="#about" className="nav-link hover:text-text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#education" className="nav-link hover:text-text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
            <li><a href="#experience" className="nav-link hover:text-text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#skills" className="nav-link hover:text-text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" className="nav-link hover:text-text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" className="nav-link hover:text-text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
