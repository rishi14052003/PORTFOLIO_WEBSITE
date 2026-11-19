import React from 'react';
import { ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';
import { testimonials } from '../data/credentialsData.js';
import { contactInfo } from '../constants/contactInfo.js';

const Testimonials = () => (
  <AnimatedSection id="testimonials" className="section testimonials-section" animation="fadeInUp">
    <h2 className="section-title">
      <MessageSquareQuote className="section-icon" size={23} />
      Testimonials
    </h2>
    {testimonials.length > 0 ? (
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card" key={`${testimonial.name}-${testimonial.quote}`}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}{testimonial.company ? ` · ${testimonial.company}` : ''}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    ) : (
      <div className="testimonial-invitation">
        <p>We haven&apos;t worked together yet—or perhaps your recommendation is still on its way.</p>
        <a
          className="btn btn-secondary"
          href={`mailto:${contactInfo.email}?subject=${encodeURIComponent('Portfolio recommendation')}`}
        >
          Share a recommendation <ArrowUpRight size={15} />
        </a>
      </div>
    )}
  </AnimatedSection>
);

export default Testimonials;
