import React from 'react';
import { ArrowUpRight, ExternalLink, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';
import { projects } from '../data/projectsData.js';
import { staggerContainer } from '../utils/animationUtils.js';

const Projects = ({ openProject }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 42, rotateX: 8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
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
      
      <p className="section-lede">
        A selection of experiments and products where engineering meets practical impact.
      </p>
      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -9, transition: { duration: 0.25 } }}
          >
            <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
              <span className="project-art-index">0{index + 1}</span>
              <span className="project-art-orbit" />
              <span className="project-art-orbit project-art-orbit-inner" />
              <span className="project-art-cross">✳</span>
            </div>
            <div className="project-card-body">
              <div className="project-meta">
                <span>CASE STUDY / 0{index + 1}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-blurb">{project.blurb}</p>
              {project.outcomes && (
                <div className="project-feature-metric">
                  <strong>{project.outcomes[0].value}</strong>
                  <span>{project.outcomes[0].label}</span>
                </div>
              )}
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              )}
              <div className="project-actions">
                <button className="btn btn-primary" onClick={() => openProject(project)}>
                  Read case study <ArrowUpRight size={15} />
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-code-link"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;
