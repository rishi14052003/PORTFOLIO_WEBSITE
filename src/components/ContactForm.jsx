import React from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';
import { contactInfo } from '../constants/contactInfo.js';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatedSection id="contact" className="section contact-form-section" animation="fadeInUp">
      <div className="contact-form-intro">
        <span className="contact-overline"><Mail size={15} /> HAVE A PROJECT IN MIND?</span>
        <h2 className="contact-form-title">Let&apos;s make<br />something meaningful.</h2>
        <p>Tell me a little about what you&apos;re working on. Your default email app will open with your message ready to send.</p>
        <a href={`mailto:${contactInfo.email}`} className="contact-email-link">
          {contactInfo.email} <ArrowUpRight size={15} />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Your name</span>
          <input type="text" name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={100} />
        </label>
        <label>
          <span>Email address</span>
          <input type="email" name="email" autoComplete="email" placeholder="jane@example.com" required maxLength={254} />
        </label>
        <label>
          <span>How can I help?</span>
          <textarea name="message" rows="4" placeholder="A few details about your project…" required maxLength={5000} />
        </label>
        <button className="btn btn-primary contact-submit" type="submit">
          Open email app <Send size={15} />
        </button>
        <p className="contact-privacy-note">Your message is prepared in your email app; this site does not store form entries.</p>
      </form>
    </AnimatedSection>
  );
};

export default ContactForm;
