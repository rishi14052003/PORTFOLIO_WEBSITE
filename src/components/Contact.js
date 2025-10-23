import React from "react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-link">+91 9099999309</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a href="mailto:siddh2606@gmail.com" className="contact-link">siddh2606@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <a href="https://github.com/rishi14052003" target="_blank" rel="noreferrer" className="contact-link">github.com/rishi14052003</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <a href="https://www.linkedin.com/in/rishabh-jain-a34623227/" target="_blank" rel="noreferrer" className="contact-link">linkedin.com/in/rishabh-jain-a34623227</a>
          </div>
        </div>
      </div>
    </section>
  );
}
