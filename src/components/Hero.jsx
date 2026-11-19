import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, FileText, Github } from "lucide-react";
import { contactInfo, resumeUrl } from "../constants/contactInfo.js";

const Hero = ({ scrollToSection }) => (
  <header className="hero" id="home">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-inner">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="eyebrow hero-eyebrow">
          <span className="availability-dot" />
          SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> FULL-STACK &amp; ML
        </div>
        <h1 className="hero-title">
          Building for
          <span className="hero-title-line">
            <span className="outline-text">what&apos;s next.</span>
            <motion.span
              className="hero-spark"
              aria-hidden="true"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.18, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ✳
            </motion.span>
          </span>
        </h1>
        <p className="hero-description">
          I&apos;m Rishabh Jain — a software engineer turning complex ideas into
          considered digital products, intelligent systems, and experiences
          people love to use.
        </p>
        <div className="hero-actions">
          <motion.button
            className="btn btn-primary hero-cta"
            onClick={() => scrollToSection("projects")}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore my work <ArrowRight size={17} />
          </motion.button>
          <motion.a
            className="hero-text-link"
            href={`mailto:${contactInfo.email}`}
            whileHover={{ x: 4 }}
          >
            Let&apos;s talk <ArrowUpRight size={16} />
          </motion.a>
          <motion.a
            className="hero-text-link"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
          >
            View résumé <FileText size={15} />
          </motion.a>
        </div>
        <motion.div
          className="hero-scroll-cue"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </motion.div>
      </motion.div>

      <motion.aside
        className="hero-art"
        initial={{ opacity: 0, scale: 0.86, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Portfolio highlights"
      >
        <div className="art-corner art-corner-top" aria-hidden="true">RJ — 01</div>
        <motion.div
          className="orbit orbit-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <motion.div
          className="orbit orbit-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        <motion.div
          className="art-core"
          animate={{ scale: [1, 1.035, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span>RJ</span>
        </motion.div>
        <div className="art-caption">
          <span>DESIGN-MINDED</span>
          <span>ENGINEER</span>
        </div>
        <div className="art-corner art-corner-bottom" aria-hidden="true">
          <Github size={15} /> BUILDING IN PUBLIC
        </div>
      </motion.aside>

      <div className="hero-index" aria-hidden="true">01 — 06</div>
    </div>
    <div className="hero-ticker" aria-label="Specialties">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <span className="ticker-group" key={copy} aria-hidden={copy === 1}>
            <span>FULL-STACK DEVELOPMENT</span><i>✳</i>
            <span>MACHINE LEARNING</span><i>✳</i>
            <span>PRODUCT THINKING</span><i>✳</i>
            <span>CREATIVE ENGINEERING</span><i>✳</i>
          </span>
        ))}
      </div>
    </div>
  </header>
);

export default Hero;
