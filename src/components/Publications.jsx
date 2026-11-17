import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const Publications = () => {
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
    <AnimatedSection id="publications" className="section" animation="fadeInUp">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen className="section-icon" size={24} />
        </motion.div>
        Publications
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
            April 2025
          </motion.div>
          <motion.div 
            className="timeline-title"
            whileHover={{ x: 10, color: "var(--accent-color)" }}
            transition={{ duration: 0.3 }}
          >
            LIPNET: Deep Learning for Visual Speech Recognition
          </motion.div>
          <motion.div 
            className="timeline-subtitle"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            TensorFlow, PyTorch, OpenCV, Keras
          </motion.div>
          <motion.div 
            className="timeline-description"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ color: 'var(--text-secondary)' }}>
              <div className="publication-actions">
                <a href="https://www.ijset.in/lipnet-deep-learning-visual-speech-recognitions/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View Publication
                </a>
                <a href="https://github.com/rishi14052003/lip_parser" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Published in International Journal of Scientific Engineering and Technology (IJSET)
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                DOI: 10.61463/ijset.vol.13.issue2.210
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Publications;
