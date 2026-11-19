import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsModal({ open, project, onClose }) {
  useEffect(() => {
    if (!open || !project) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [open, project, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          key={project.id}
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            aria-describedby="project-dialog-description"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              ×
            </button>

            <h2 id="project-dialog-title">{project.title}</h2>
            <p id="project-dialog-description">{project.blurb}</p>

            <div className="modal-detail">
              <h3>Project overview</h3>
              <p>{project.description}</p>
            </div>

            {project.outcomes && (
              <div className="modal-detail">
                <h3>Measured outcomes</h3>
                <div className="case-study-metrics">
                  {project.outcomes.map(({ value, label }) => (
                    <div className="case-study-metric" key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.tags && (
              <div className="modal-detail">
                <h3>Technologies used</h3>
                <div className="modal-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions">
              {project.link && (
                <a
                  className="btn btn-primary"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ArrowUpRight size={15} />
                </a>
              )}
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
