import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">
        <Briefcase className="section-icon" size={24} />
        Experience
      </h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">Sept 2025 – Present</div>
          <div className="timeline-title">MERN Stack Developer</div>
          <div className="timeline-subtitle">iGeek — Surat, Gujarat</div>
          <div className="timeline-description">
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Developed an Online Restaurant Booking System, Expense Calculator, and Workaholic platform</li>
              <li>Utilized React, Redux, Node.js, Express.js, and MySQL to build scalable applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
