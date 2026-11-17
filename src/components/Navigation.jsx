import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const items = ['About', 'Education', 'Experience', 'Skills', 'Publications', 'Projects', 'Credentials', 'Testimonials', 'GitHub', 'Contact'];

const Navigation = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <motion.nav
      ref={navRef}
      className="nav"
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="nav-content">
          <a
            className="nav-logo"
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMenuOpen(false);
            }}
            aria-label="Rishabh Jain, back to top"
          >
            <span>RJ</span><span className="nav-logo-dot">.</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <motion.ul
            className={`nav-menu${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            initial={false}
          >
            {items.map((item, index) => (
              <motion.li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link${item === 'Contact' ? ' nav-link-contact' : ''}${activeSection === item.toLowerCase() ? ' is-active' : ''}`}
                  aria-current={activeSection === item.toLowerCase() ? 'location' : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {item === 'Contact' && <ArrowUpRight size={14} aria-hidden="true" />}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
