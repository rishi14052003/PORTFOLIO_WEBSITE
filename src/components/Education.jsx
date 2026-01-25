import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="section-title">
        <GraduationCap className="section-icon" size={24} />
        Education
      </h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">Sept 2021 – Aug 2025</div>
          <div className="timeline-title">B.Tech in Computer Science</div>
          <div className="timeline-subtitle">Vellore Institute of Technology</div>
          <div className="timeline-description">CGPA: 7.70</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
