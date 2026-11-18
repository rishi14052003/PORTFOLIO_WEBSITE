import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo, personalInfo, resumeUrl } from '../constants/contactInfo.js';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Selected work', href: '#projects' },
  { label: 'GitHub activity', href: '#github' },
  { label: 'Contact', href: '#contact' }
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <motion.div
        className="footer-cta"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div>
          <span className="footer-eyebrow"><span aria-hidden="true" /> HAVE A CHALLENGE IN MIND?</span>
          <h2>Let's make something<br />that matters.</h2>
        </div>
        <a className="footer-cta-link" href={`mailto:${contactInfo.email}`}>
          <span>Start a conversation</span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
        <span className="footer-cta-mark" aria-hidden="true">RJ.</span>
      </motion.div>

      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home" aria-label={`${personalInfo.name}, back to top`}>
            RJ<span>.</span>
          </a>
          <p>Building thoughtful digital experiences, one detail at a time.</p>
          <a className="footer-resume" href={resumeUrl} target="_blank" rel="noreferrer">
            View résumé <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <h3>Explore</h3>
          <ul>
            {footerLinks.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer-connect">
          <h3>Connect</h3>
          <a className="footer-email" href={`mailto:${contactInfo.email}`}>
            <Mail size={16} aria-hidden="true" />
            <span>{contactInfo.email}</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <div className="social-links">
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub profile">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn profile">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="social-link" aria-label="Send an email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <span className="footer-built">Designed with intention <span aria-hidden="true">/</span> Built for the web</span>
        <a className="footer-top-link" href="#home">
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
