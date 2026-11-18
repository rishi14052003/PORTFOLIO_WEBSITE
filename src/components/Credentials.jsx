import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, BookOpenCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';
import { achievements, certifications } from '../data/credentialsData.js';

const Credentials = () => (
  <AnimatedSection id="credentials" className="section" animation="fadeInUp">
    <motion.h2 className="section-title">
      <Award className="section-icon" size={23} />
      Achievements &amp; credentials
    </motion.h2>
    <p className="section-lede">
      Published research and professional credentials.
    </p>

    <div className="credentials-grid">
      {achievements.map((achievement) => (
        <article className="credential-card" key={achievement.title}>
          <div className="credential-icon"><BookOpenCheck size={19} /></div>
          <div>
            <span className="credential-type">{achievement.type} · {achievement.date}</span>
            <h3>{achievement.title}</h3>
            <p>{achievement.organization}</p>
            <a href={achievement.link} target="_blank" rel="noreferrer" className="credential-link">
              Read publication <ArrowUpRight size={14} />
            </a>
          </div>
        </article>
      ))}
      {certifications.map((certification) => (
        <article className="credential-card" key={certification.name}>
          <div className="credential-icon"><Award size={19} /></div>
          <div>
            <span className="credential-type">Certification · {certification.year}</span>
            <h3>{certification.name}</h3>
            <p>{certification.issuer}</p>
            {certification.link && (
              <a href={certification.link} target="_blank" rel="noreferrer" className="credential-link">
                Verify credential <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
    {certifications.length === 0 && (
      <p className="credentials-note">Additional certifications can be added here when available.</p>
    )}
  </AnimatedSection>
);

export default Credentials;
