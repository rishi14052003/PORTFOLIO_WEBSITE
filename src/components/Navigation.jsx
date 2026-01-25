import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition.js';

const Navigation = ({ scrollToSection }) => {
  const mousePosition = useMousePosition();

  const calculateParallax = (elementX, elementY, intensity = 0.02) => {
    const deltaX = (mousePosition.x - elementX) * intensity;
    const deltaY = (mousePosition.y - elementY) * intensity;
    return { x: deltaX, y: deltaY };
  };

  return (
    <motion.nav 
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div 
          className="nav-content"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="nav-logo"
            whileHover={{ 
              rotate: 360, 
              scale: 1.2,
              textShadow: "0 0 30px rgba(102, 126, 234, 0.5)"
            }}
            transition={{ duration: 0.6 }}
          >
            RJ
          </motion.div>
          <motion.ul className="nav-menu">
            {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.li key={item}>
                <motion.a 
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(item.toLowerCase()); 
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    color: "var(--accent-color)",
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
