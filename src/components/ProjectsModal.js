import React from "react";

export default function ProjectsModal({ open, project, onClose }) {
  if (!open || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{project.title}</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.blurb}</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Project Overview</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.description}</p>
        </div>

        {project.tags && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Technologies Used</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              className="btn btn-primary"
              onClick={() => window.open(project.link, '_blank', 'noreferrer')}
              aria-label={`Open ${project.title} on GitHub`}
            >
              View on GitHub
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
