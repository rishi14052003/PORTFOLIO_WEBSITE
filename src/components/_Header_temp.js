import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((s) => !s);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand">
          <a href="#summary" onClick={(e) => handleNavClick(e, 'summary')} className="brand-link">
            Rishabh H. Jain
          </a>
          <div className="brand-sub">Software Engineer — Full-Stack & ML</div>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger" />
        </button>

        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <a href="#summary" onClick={(e) => handleNavClick(e, 'summary')}>Summary</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
