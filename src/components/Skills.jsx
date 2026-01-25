import React from 'react';
import { Zap } from 'lucide-react';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">
        <Zap className="section-icon" size={24} />
        Skills
      </h2>
      <div className="skills-list">
        <div className="skill-item">
          <div className="skill-category">Machine Learning</div>
          <div className="skill-items">GANs, VAEs, Naive Bayes, TensorFlow, PyTorch, Scikit-Learn</div>
        </div>
        <div className="skill-item">
          <div className="skill-category">NLP</div>
          <div className="skill-items">Text processing, sentiment analysis, language models</div>
        </div>
        <div className="skill-item">
          <div className="skill-category">Full-Stack</div>
          <div className="skill-items">React.js, Node.js, Express.js, MySQL, MongoDB, REST APIs</div>
        </div>
        <div className="skill-item">
          <div className="skill-category">Cloud</div>
          <div className="skill-items">AWS Certified, cloud deployment and management</div>
        </div>
        <div className="skill-item">
          <div className="skill-category">Problem-Solving</div>
          <div className="skill-items">Data Structures, Algorithms, System Design</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
