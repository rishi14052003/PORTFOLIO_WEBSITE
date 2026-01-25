import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const Skills = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <AnimatedSection id="skills" className="section" animation="fadeInUp">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="section-icon" size={24} />
        </motion.div>
        Skills
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
            Core Competencies
          </motion.div>
          <motion.div 
            className="timeline-title"
            whileHover={{ x: 10, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            Machine Learning & AI
          </motion.div>
          <motion.div 
            className="timeline-subtitle"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Advanced ML Frameworks & Algorithms
          </motion.div>
          <motion.div 
            className="timeline-description"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-category">Machine Learning</div>
                <div className="skill-items">GANs, VAEs, Naive Bayes, TensorFlow, PyTorch, Scikit-Learn</div>
              </div>
              <div className="skill-item">
                <div className="skill-category">NLP</div>
                <div className="skill-items">Text processing, sentiment analysis, language models</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="timeline-item" variants={itemVariants}>
          <motion.div 
            className="timeline-date"
            whileHover={{ scale: 1.05, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            Development Stack
          </motion.div>
          <motion.div 
            className="timeline-title"
            whileHover={{ x: 10, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            Full-Stack Development
          </motion.div>
          <motion.div 
            className="timeline-subtitle"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Modern Web Technologies & Cloud
          </motion.div>
          <motion.div 
            className="timeline-description"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-category">Full-Stack</div>
                <div className="skill-items">React.js, Node.js, Express.js, MySQL, MongoDB, REST APIs</div>
              </div>
              <div className="skill-item">
                <div className="skill-category">Cloud</div>
                <div className="skill-items">AWS Certified, cloud deployment and management</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="timeline-item" variants={itemVariants}>
          <motion.div 
            className="timeline-date"
            whileHover={{ scale: 1.05, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            Problem Solving
          </motion.div>
          <motion.div 
            className="timeline-title"
            whileHover={{ x: 10, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            System Design & Algorithms
          </motion.div>
          <motion.div 
            className="timeline-subtitle"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Data Structures & System Architecture
          </motion.div>
          <motion.div 
            className="timeline-description"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-category">Problem-Solving</div>
                <div className="skill-items">Data Structures, Algorithms, System Design</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Skills;
