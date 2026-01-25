import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';
import { educationData } from '../constants/educationData.js';
import { animationVariants, staggerContainer, timelineItemVariants } from '../utils/animationUtils.js';

const Education = () => {
  const timelineVariants = staggerContainer;
  const itemVariants = timelineItemVariants;

  return (
    <AnimatedSection id="education" className="section" animation={animationVariants.fadeInUp}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap className="section-icon" size={24} />
        </motion.div>
        Education
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
            {educationData.period}
          </motion.div>
          <motion.div 
            className="timeline-title"
            whileHover={{ x: 10, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            {educationData.degree}
          </motion.div>
          <motion.div 
            className="timeline-subtitle"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {educationData.institution}
          </motion.div>
          <motion.div 
            className="timeline-description"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            CGPA: {educationData.cgpa}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Education;
