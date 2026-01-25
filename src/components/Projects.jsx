import React from 'react';
import { Rocket } from 'lucide-react';

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
  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        <Rocket className="section-icon" size={24} />
        Featured Projects
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-title">{p.title}</div>
            <div className="project-blurb">{p.blurb}</div>
            {p.tags && (
              <div className="project-tags">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="project-actions">
              <button className="btn btn-primary" onClick={() => openProject(p)}>View Details</button>
              <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-secondary">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
