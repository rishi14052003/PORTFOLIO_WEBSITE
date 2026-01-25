import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const Experience = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatedSection id="experience" className="section" animation="fadeInLeft">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="section-icon" size={24} />
        </motion.div>
        Experience
      </motion.h2>
      
      <motion.div 
        className="timeline"
        variants={timelineVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="timeline-item" variants={itemVariants}>
          <motion.div 
            className="timeline-date"
            whileHover={{ scale: 1.05, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            Sept 2025 – Present
          </motion.div>
          <motion.div 
            className="timeline-title"
            whileHover={{ x: 10, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            MERN Stack Developer
          </motion.div>
          <motion.div 
            className="timeline-subtitle"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            iGeek — Surat, Gujarat
          </motion.div>
          <motion.div 
            className="timeline-description"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.ul variants={listVariants}>
              <motion.li variants={listItemVariants} whileHover={{ x: 10 }}>
                Developed an Online Restaurant Booking System, Expense Calculator, and Workaholic platform
              </motion.li>
              <motion.li variants={listItemVariants} whileHover={{ x: 10 }}>
                Utilized React, Redux, Node.js, Express.js, and MySQL to build scalable applications
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Experience;
