import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <aside className="sidebar">
      <motion.div 
        className="sidebar-card intro-card"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="intro-avatar"
          whileHover={{ 
            rotate: 360, 
            scale: 1.1,
            boxShadow: "0 15px 40px rgba(255, 255, 255, 0.14)"
          }}
          transition={{ duration: 0.8 }}
        >
          RJ
        </motion.div>
        <motion.h2
          className="intro-name"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Rishabh Hitesh Jain
        </motion.h2>
        <motion.p 
          className="intro-title"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          Software Engineer
        </motion.p>
        <motion.div 
          className="intro-divider"
          initial={{ width: 0 }}
          animate={{ width: "50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p 
          className="intro-subtitle"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Full-Stack Development & Machine Learning
        </motion.p>
      </motion.div>

      <motion.div 
        className="sidebar-card about-card" 
        id="about"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="sidebar-title"
          whileHover={{ x: 5, color: "var(--accent-color)" }}
          transition={{ duration: 0.3 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="sidebar-text"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          A skilled Software Engineer with expertise in Full-Stack Development and Machine Learning.
          Passionate about building scalable web applications and ML systems, with experience in
          cloud deployment and system architecture.
        </motion.p>
      </motion.div>

      <motion.div 
        className="sidebar-card contact-card" 
        id="contact-info"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="sidebar-title"
          whileHover={{ x: 5, color: "var(--accent-color)" }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </motion.h2>
        <motion.div 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a 
            href="mailto:siddh2606@gmail.com" 
            className="contact-item"
            variants={contactVariants}
            whileHover={{ 
              x: 10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="contact-icon" size={20} />
            <span>siddh2606@gmail.com</span>
          </motion.a>
          <motion.a 
            href="tel:+919099999309" 
            className="contact-item"
            variants={contactVariants}
            whileHover={{ 
              x: 10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="contact-icon" size={20} />
            <span>+91 90999 99309</span>
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/rishabh-jain-a34623227/" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-item"
            variants={contactVariants}
            whileHover={{ 
              x: 10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="contact-icon" size={20} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a 
            href="https://github.com/rishi14052003" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-item"
            variants={contactVariants}
            whileHover={{ 
              x: 10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="contact-icon" size={20} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
