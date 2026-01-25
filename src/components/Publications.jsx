import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  return (
    <section className="section" id="publications">
      <h2 className="section-title">
        <BookOpen className="section-icon" size={24} />
        Publications
      </h2>
      <div style={{ color: 'var(--text-secondary)' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          LIPNET: Deep Learning for Visual Speech Recognition
        </h3>
        <p style={{ marginBottom: '0.5rem' }}>TensorFlow, PyTorch, OpenCV, Keras</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://www.ijset.in/lipnet-deep-learning-visual-speech-recognitions/" target="_blank" rel="noreferrer" className="btn btn-secondary">
            View Publication
          </a>
          <a href="https://github.com/rishi14052003/lip_parser" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
          Published April 2025 | DOI: 10.61463/ijset.vol.13.issue2.210
        </p>
      </div>
    </section>
  );
};

export default Publications;
