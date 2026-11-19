import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';
import { skillsCategories } from '../constants/skillsData.js';

const skillGroups = skillsCategories.map(({ category, items }) => ({
  category,
  skills: items.split(',').map((skill) => skill.trim()).filter(Boolean)
}));
const filters = ['All', ...skillGroups.map(({ category }) => category)];

const Skills = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const normalizedQuery = query.trim().toLowerCase();
  const visibleGroups = skillGroups
    .filter(({ category }) => activeFilter === 'All' || category === activeFilter)
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => (
        !normalizedQuery
        || skill.toLowerCase().includes(normalizedQuery)
        || group.category.toLowerCase().includes(normalizedQuery)
      ))
    }))
    .filter(({ skills }) => skills.length > 0);
  const resultCount = visibleGroups.reduce((total, group) => total + group.skills.length, 0);

  const searchSkill = (skill) => {
    setActiveFilter('All');
    setQuery(skill);
  };

  return (
    <AnimatedSection id="skills" className="section" animation="fadeInUp">
      <motion.h2 className="section-title">
        <Sparkles className="section-icon" size={23} />
        Skills explorer
      </motion.h2>
      <p className="section-lede">
        Browse by specialty or search for a technology. Select any skill to explore it.
      </p>

      <div className="skills-controls">
        <label className="skills-search">
          <Search size={17} aria-hidden="true" />
          <span className="visually-hidden">Search skills</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search technologies..."
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear skill search">
              <X size={16} />
            </button>
          )}
        </label>

        <div className="skills-filters" role="group" aria-label="Filter skills by category">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`skills-filter${activeFilter === filter ? ' is-active' : ''}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <p className="skills-count" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'skill' : 'skills'} shown
      </p>

      {visibleGroups.length > 0 ? (
        <motion.div
          className="skills-explorer-grid"
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {visibleGroups.map(({ category, skills }) => (
            <motion.article
              key={category}
              className="skills-category-card"
              layout
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
              }}
            >
              <h3>{category}</h3>
              <div className="skill-chip-list">
                {skills.map((skill) => (
                  <button
                    type="button"
                    key={skill}
                    className="skill-chip"
                    onClick={() => searchSkill(skill)}
                    aria-label={`Search for ${skill}`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        <div className="skills-empty" role="status">
          <p>No skills match “{query}”. Try another search or clear the filter.</p>
          <button type="button" className="btn btn-secondary" onClick={() => {
            setQuery('');
            setActiveFilter('All');
          }}>
            Show all skills
          </button>
        </div>
      )}
    </AnimatedSection>
  );
};

export default Skills;
