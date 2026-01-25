import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const projects = [
  { 
    id: 1, 
    title: 'Movie Ticket Booking Website', 
    blurb: 'Full-stack platform handling 50+ movies and 100+ users',
    description: 'Engineered a full-stack booking platform handling 50+ movie listings and 100+ user accounts with MongoDB backend. Implemented RESTful APIs that improved query response times by 30%, enhancing database efficiency. Delivered a responsive UI that improved user interaction speed by 25%, increasing session duration and engagement.',
    link: 'https://github.com/rishi14052003/ShowTimeBooker',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API']
  },
  { 
    id: 2, 
    title: 'Sentiment Analysis using NLP', 
    blurb: 'NLP classifier with 83.2% accuracy on 10,000+ reviews',
    description: 'Designed and trained a Naive Bayes classifier on 10,000+ labeled reviews, achieving 83.2% accuracy. Optimized preprocessing (tokenization, vectorization, feature scaling), boosting accuracy by 7% compared to baseline. Deployed a real-time text classifier capable of processing 100+ live inputs per second, enabling practical customer feedback analysis.',
    link: 'https://github.com/rishi14052003/sentiment-analysis',
    tags: ['Python', 'NLP', 'Machine Learning', 'scikit-learn']
  },
  { 
    id: 3, 
    title: 'Random Image Generator using AI/ML', 
    blurb: 'Generative AI model for creative image synthesis',
    description: 'Built a generative model capable of creating 1,000+ unique images from random seeds and text prompts. Reduced design workload by 80% faster image prototyping for creative applications in gaming.',
    link: 'https://github.com/rishi14052003/image-generator',
    tags: ['TensorFlow', 'GANs', 'Python', 'Deep Learning']
  }
];

const Projects = ({ openProject }) => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <AnimatedSection id="projects" className="section" animation="scaleIn">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="section-icon" size={24} />
        </motion.div>
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="timeline"
        variants={timelineVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} className="timeline-item" variants={itemVariants}>
            <motion.div 
              className="timeline-title"
              whileHover={{ x: 10, color: "var(--accent-color)" }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.div>
            <motion.div 
              className="timeline-subtitle"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {project.blurb}
            </motion.div>
            <motion.div 
              className="timeline-description"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="projects-grid"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.div 
                  key={project.id} 
                  className="project-card"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="project-title"
                    whileHover={{ x: 5, color: "var(--accent-color)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.div>
                  <motion.div 
                    className="project-blurb"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.blurb}
                  </motion.div>
                  {project.tags && (
                    <motion.div 
                      className="project-tags"
                      variants={tagVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ staggerChildren: 0.1 }}
                    >
                      {project.tags.map((tag, idx) => (
                        <motion.span 
                          key={idx} 
                          className="tag"
                          variants={tagVariants}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                  <motion.div className="project-actions">
                    <motion.button 
                      className="btn btn-primary"
                      onClick={() => openProject(project)}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)" 
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                    </motion.button>
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-secondary"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" 
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Code
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;
