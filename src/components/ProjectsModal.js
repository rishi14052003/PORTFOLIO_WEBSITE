import React from "react";

export default function ProjectsModal({ open, project, onClose }) {
  if (!open || !project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-desc">{project.description}</p>
        {project.link && (
          <p>
            <button
              className="github-btn"
              onClick={() => window.open(project.link, '_blank', 'noreferrer')}
              aria-label={`Open ${project.title} on GitHub`}
            >
              GitHub
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
